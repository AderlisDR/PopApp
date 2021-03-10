using PopAppCore.Dtos;
using System.Threading.Tasks;

namespace PopAppCore.Interfaces.Services
{
    public interface IChartServices
    {
        Task<CommonStatisticsModel> GetCommonStatistics();
    }
}
