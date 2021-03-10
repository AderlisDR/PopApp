using Microsoft.EntityFrameworkCore;
using PopApp.Structure.Data;
using PopAppCore.Dtos;
using PopAppCore.Entities;
using PopAppCore.Enums;
using PopAppCore.Interfaces.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PopAppData.Services
{
    public class ChartServices : IChartServices
    {
        private readonly PopAppContext popAppContext;

        public ChartServices(PopAppContext context) => popAppContext = context;

        public async Task<CommonStatisticsModel> GetCommonStatistics()
        {
            List<ScheduleContainerFreigth> freigths = await popAppContext.ScheduleContainerFreigths.ToListAsync();

            var statistics = new CommonStatisticsModel
            {
                ScheduledVesselsCount = popAppContext.Schedules.Count(),
                NoEvaluatedFreigthCount = freigths.Where(freigth => freigth.EvaluationStatus == EvaluationStatus.None).Count(),
                ApprovedFreigthCount = freigths.Where(freigth => freigth.EvaluationStatus == EvaluationStatus.Approved).Count(),
                RejectedFreigthCount = freigths.Where(freigth => freigth.EvaluationStatus == EvaluationStatus.Reported).Count()
            };

            return statistics;
        }
    }
}
