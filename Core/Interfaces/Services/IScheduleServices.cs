using Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace Core.Interfaces.Services
{
    public interface IScheduleServices
    {
        Task<IEnumerable<Schedule>> GetSchedules(Expression<Func<Schedule, bool>> expression);
        Task<Schedule> GetSchedule(int id);
        Task CreateSchedule(Schedule schedule);
        Task UpdateSchedule(int id, Schedule schedule);
        Task DeleteSchedule(int id);
        void PrepareScheduleRequest(Schedule scheduleRequest);
        Task<Vessel> GetScheduleVessel(int scheduleId);
        Task<IList<ScheduleContainer>> GetScheduleVesselContainers(int scheduleId);
        Task AddContainerToScheduleVessel(int scheduleId, int containerId);
        Task AddMultipleContainersToScheduleVessel(int scheduleId, IList<int> containersIds);
        Task AddFreigthToScheduleVesselContainer(int scheduleContainerId, int freigthId);
        Task<IList<ScheduleContainerFreigth>> GetScheduleContainerFreigths(int scheduleContainerId);
        Task<IList<Product>> GetScheduleContainerFreigthProducts(int scheduleContainerFreigthId);
        Task AddProductToScheduleVesselContainerFreigth(int scheduleContainerFreigthId, int productId);
        Task RemoveProductFromScheduleVesselContainerFreigth(int scheduleContainerFreigthId, int productId);
        Task ApproveScheduleContainerFreigthById(int scheduleContainerFreigthId);
        Task ReportScheduleContainerFreigthById(int scheduleContainerFreigthId, string message);
    }
}
