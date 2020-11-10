using PopApp.Core.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace PopApp.Core.Interfaces.Services
{
    public interface IContainerServices
    {
        Task<IEnumerable<Container>> GetContainers();
        Task<Container> GetContainer(int id);
        Task CreateContainer(Container container);
        Task UpdateContainer(int id, Container container);
        Task DeleteContainer(int id);
    }
}
