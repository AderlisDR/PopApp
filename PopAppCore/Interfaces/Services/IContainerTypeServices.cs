using PopAppCore.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace PopAppCore.Interfaces.Services
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
