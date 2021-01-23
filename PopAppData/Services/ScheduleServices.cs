using Microsoft.EntityFrameworkCore;
using PopApp.Structure.Data;
using PopAppCore.Entities;
using PopAppCore.Enums;
using PopAppCore.Interfaces.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace PopAppData.Services
{
    public class ScheduleServices : IScheduleServices
    {
        private readonly PopAppContext _context;

        public ScheduleServices(PopAppContext context) => _context = context;

        public async Task CreateSchedule(Schedule schedule)
        {
            _context.Add(schedule);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteSchedule(int id)
        {
            var schedule = await GetSchedule(id);
            if(schedule != null)
            {
                schedule.IsActive = false;
                _context.Update(schedule);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<Schedule> GetSchedule(int id)
        {
            return await _context.Schedules.FirstOrDefaultAsync(schedule => schedule.ScheduleId == id);
        }

        public async Task<IEnumerable<Schedule>> GetSchedules(Expression<Func<Schedule, bool>> expression)
        {
            return await _context.Schedules.Where(expression).ToListAsync();
        }

        public async Task UpdateSchedule(int id, Schedule schedule)
        {
            var scheduleUpdate = await GetSchedule(id);
            if (scheduleUpdate != null ){

                scheduleUpdate.ScheduleDate = schedule.ScheduleDate;
                scheduleUpdate.IsActive = schedule.IsActive;
                scheduleUpdate.CreateAt = DateTime.Now;
            }
        }

        public virtual void PrepareScheduleRequest(Schedule scheduleRequest)
        {
            scheduleRequest.CreateAt = DateTime.UtcNow;
            scheduleRequest.IsActive = true;
        }

        public async Task<Vessel> GetScheduleVessel(int scheduleId)
        {
            Schedule schedule = await _context.Schedules
                .Where(schedule => schedule.ScheduleId == scheduleId)
                .Include(schedule => schedule.Vessel)
                .FirstOrDefaultAsync();

            if (!(schedule is null))
                return schedule.Vessel;

            return null;
        }

        public async Task<IList<ScheduleContainer>> GetScheduleVesselContainers(int scheduleId)
        {
            IList<ScheduleContainer> scheduleContainers = await _context.ScheduleContainers
                .Where(scheduleContainer => scheduleContainer.ScheduleId == scheduleId)
                .Include(scheduleContainer => scheduleContainer.Container)
                .ToListAsync();

            return scheduleContainers;
        }

        public async Task AddContainerToScheduleVessel(int scheduleId, int containerId)
        {
            var newScheduleContainer = new ScheduleContainer
            {
                ScheduleId = scheduleId,
                ContainerId = containerId
            };

            _context.Add(newScheduleContainer);
            await _context.SaveChangesAsync();
        }

        public async Task AddMultipleContainersToScheduleVessel(int scheduleId, IList<int> containersIds)
        {
            foreach (int containerId in containersIds)
            {
                Container foundContainer = await _context.Containers.FirstOrDefaultAsync(container => container.ContainerId == containerId);

                if (!(foundContainer is null))
                {
                    var newContainer = new Container
                    {
                        ContainerType = foundContainer.ContainerType,
                        ContainerPayload = foundContainer.ContainerPayload,
                        ContainerCapacity = foundContainer.ContainerCapacity,
                        ContainerLenth = foundContainer.ContainerLenth,
                        ContainerWidth = foundContainer.ContainerWidth,
                        ContainerHeigth = foundContainer.ContainerHeigth,
                        IsActive = true
                    };

                    _context.Add(newContainer);
                    await _context.SaveChangesAsync();

                    var newScheduleContainer = new ScheduleContainer
                    {
                        ScheduleId = scheduleId,
                        ContainerId = newContainer.ContainerId
                    };

                    _context.Add(newScheduleContainer);
                    await _context.SaveChangesAsync();
                }
            }
        }

        public async Task AddFreigthToScheduleVesselContainer(int scheduleContainerId, int freigthId)
        {
            var scheduleContainerFreigth = new ScheduleContainerFreigth
            {
                ScheduleContainerId = scheduleContainerId,
                FreigthId = freigthId
            };

            _context.ScheduleContainerFreigths.Add(scheduleContainerFreigth);
            await _context.SaveChangesAsync();
        }

        public async Task<IList<ScheduleContainerFreigth>> GetScheduleContainerFreigths(int scheduleContainerId)
        {
            IList<ScheduleContainerFreigth> scheduleContainerFreigths = await _context.ScheduleContainerFreigths
                .Where(scheduleContainerFreigth => scheduleContainerFreigth.ScheduleContainerId == scheduleContainerId)
                .Include(scheduleContainerFreigth => scheduleContainerFreigth.Freigth)
                .ToListAsync();

            return scheduleContainerFreigths;
        }

        public async Task<IList<Product>> GetScheduleContainerFreigthProducts(int scheduleContainerFreigthId)
        {
            IList<Product> scheduleContainerFreigthProducts = await _context.ScheduleContainerFreigthProducts
                .Where(scheduleContainerFreigthProduct => scheduleContainerFreigthProduct.ScheduleContainerFreigthId == scheduleContainerFreigthId)
                .Include(scheduleContainerFreigthProduct => scheduleContainerFreigthProduct.Product)
                .Select(scheduleContainerFreigthProduct => scheduleContainerFreigthProduct.Product)
                .ToListAsync();

            return scheduleContainerFreigthProducts;
        }

        public async Task AddProductToScheduleVesselContainerFreigth(int scheduleContainerFreigthId, int productId)
        {
            var scheduleContainerFreigthProduct = new ScheduleContainerFreigthProduct
            {
                ScheduleContainerFreigthId = scheduleContainerFreigthId,
                ProductId = productId
            };

            _context.ScheduleContainerFreigthProducts.Add(scheduleContainerFreigthProduct);
            await _context.SaveChangesAsync();
        }

        public async Task RemoveProductFromScheduleVesselContainerFreigth(int scheduleContainerFreigthId, int productId)
        {
            var scheduleContainerFreigthProduct = await _context.ScheduleContainerFreigthProducts
                .Where(scheduleContainerFreigthProduct => scheduleContainerFreigthProduct.ScheduleContainerFreigthId == scheduleContainerFreigthId
                    && scheduleContainerFreigthProduct.ProductId == productId)
                .FirstOrDefaultAsync();

            if (scheduleContainerFreigthProduct != null)
            {
                _context.ScheduleContainerFreigthProducts.Remove(scheduleContainerFreigthProduct);
                await _context.SaveChangesAsync();
            }
        }

        public async Task ApproveScheduleContainerFreigthById(int scheduleContainerFreigthId)
        {
            var scheduleContainerFreigth = await _context.ScheduleContainerFreigths
                .FirstOrDefaultAsync(freigth => freigth.Id == scheduleContainerFreigthId);

            if (scheduleContainerFreigth == null)
                throw new Exception("La carga no fue encontrada en los registros.");

            scheduleContainerFreigth.EvaluationStatus = EvaluationStatus.Approved;

            _context.ScheduleContainerFreigths.Update(scheduleContainerFreigth);
            await _context.SaveChangesAsync();
        }

        public async Task ReportScheduleContainerFreigthById(int scheduleContainerFreigthId, string message)
        {
            if (string.IsNullOrEmpty(message) || string.IsNullOrWhiteSpace(message))
                throw new Exception("La razón del reporte es requerida.");

            var scheduleContainerFreigth = await _context.ScheduleContainerFreigths
                .FirstOrDefaultAsync(freigth => freigth.Id == scheduleContainerFreigthId);

            if (scheduleContainerFreigth == null)
                throw new Exception("La carga no fue encontrada en los registros.");

            scheduleContainerFreigth.EvaluationStatus = EvaluationStatus.Reported;
            scheduleContainerFreigth.EvaluationMessage = message;

            _context.ScheduleContainerFreigths.Update(scheduleContainerFreigth);
            await _context.SaveChangesAsync();
        }
    }
}
