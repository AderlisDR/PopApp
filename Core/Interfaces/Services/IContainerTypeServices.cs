using Core.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Core.Interfaces.Services
{
    public interface IContainerTypeServices
    {
        Task<IEnumerable<FreigthType>> GetContainerTypes();
        Task<FreigthType> GetContainerType(int id);
        Task CreateContainerType(FreigthType type);
        Task UpdateContainerType(int id, FreigthType type);
        Task DeleteContainerType(int id);
    }
}
