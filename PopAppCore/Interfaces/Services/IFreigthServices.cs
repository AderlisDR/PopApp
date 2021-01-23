using PopAppCore.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace PopAppCore.Interfaces.Services
{
    public interface IFreigthServices
    {
        Task<IEnumerable<Freigth>> GetFreigths();
        Task<Freigth> GetFreigth(int id);
        Task<int> CreateFreigth(Freigth freigth);
        Task UpdateFreigth(int id, Freigth freigth);
        Task DeleteFreigth(int id);
    }
}
