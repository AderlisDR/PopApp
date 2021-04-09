using Core.Dtos;
using System.Threading.Tasks;

namespace Core.Interfaces.Services
{
    public interface IChartServices
    {
        Task<CommonStatisticsModel> GetCommonStatistics();
    }
}
