using Microsoft.EntityFrameworkCore;
using PopApp.Structure.Data;
using PopAppCore.Dtos;
using PopAppCore.Interfaces.Services;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace PopAppData.Services
{
    public class ChartServices : IChartServices
    {
        private readonly PopAppContext popAppContext;
        public ChartServices(PopAppContext context) => popAppContext = context;
        public async Task<ChartDto> GetChartData(DateTime startDate, DateTime endDate)
        {

            //var scheduleData = await popAppContext.Schedules
            //    .Include(schedule => schedule.Vessel)
            //        .ThenInclude(vessel => vessel.Containers)
            //            .ThenInclude(container => container.Freigths)
            //    .Where(schedule => schedule.ScheduleDate >= startDate && schedule.ScheduleDate <= endDate)
            //    .ToListAsync();

            //ChartDto chart = new ChartDto
            //{
            //    VesselCount = scheduleData.Count(),
            //    ContainerCount = scheduleData.Sum(schedule => schedule.Vessel.Containers.Count()),
            //    FreigthCount = scheduleData.Sum(schedule => schedule.Vessel.Containers.Sum(container => container.Freigths.Count()))
            //};

            //return chart;

            return new ChartDto();
        }
    }
}
