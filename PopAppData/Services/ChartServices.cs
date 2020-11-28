using Microsoft.EntityFrameworkCore;
using PopApp.Structure.Data;
using PopAppCore.Dtos;
using PopAppCore.Entities;
using PopAppCore.Interfaces.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PopAppData.Services
{
    public class ChartServices : IChartServices
    {
        private readonly PopAppContext popAppContext;
        public ChartServices(PopAppContext context) => popAppContext = context;
        public async Task<ChartDto> GetChartData(DateTime startDate, DateTime endDate)
        {

            var scheduleData = await popAppContext.Schedules.Include(schedule => schedule.ContainerSchedule)
                .ThenInclude(container => container.FreigthSchedule)
                .Where(schedule => schedule.ScheduleDate >= startDate
            && schedule.ScheduleDate <= endDate).ToListAsync();
            

            ChartDto chart = new ChartDto
            {
                VesselCount = scheduleData.Count(),
                ContainerCount = scheduleData.Sum(schedule => schedule.ContainerSchedule.Count()),
                FreigthCount = scheduleData.Sum(schedule => schedule.ContainerSchedule
                .Sum(container => container.FreigthSchedule.Count()))
            };

            return chart;
        }
    }
}
