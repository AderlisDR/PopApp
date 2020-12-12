using PopAppCore.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace PopAppCore.Interfaces.Services
{
    public interface IContainerTypeServices
    {
        Task<IEnumerable<ContainerTypeModel>> GetContainerTypes();
        Task<ContainerTypeModel> GetContainerType(int id);
        Task CreateContainerType(ContainerTypeModel type);
        Task UpdateContainerType(int id, ContainerTypeModel type);
        Task DeleteContainerType(int id);
    }
}
