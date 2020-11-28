using PopAppCore.Dtos;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace PopAppCore.Interfaces.Services
{
    public interface IChartServices
    {
        Task<ChartDto> GetChartData(DateTime startDate, DateTime endDate);
    }
}
