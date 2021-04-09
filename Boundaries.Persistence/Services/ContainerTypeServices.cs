using Boundaries.Persistence.Data;
using Core.Entities;
using Core.Interfaces.Services;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Boundaries.Persistence.Services
{
    public class ContainerTypeServices : IContainerTypeServices
    {
        private readonly PopAppContext _popAppContext;

        public ContainerTypeServices(PopAppContext context) => _popAppContext = context;

        public async Task CreateContainerType(FreigthType type)
        {
             _popAppContext.Add(type);
            await _popAppContext.SaveChangesAsync();
        }

        public async Task DeleteContainerType(int id)
        {
            var type = await GetContainerType(id);
            if (type != null)
            {
                type.IsActive = false;
                _popAppContext.Update(type);
                await _popAppContext.SaveChangesAsync();
            }
        }

        public Task<FreigthType> GetContainerType(int id)
        {
            return _popAppContext.FreigthType.FirstOrDefaultAsync(type => type.Id == id);
        }

        public async Task<IEnumerable<FreigthType>> GetContainerTypes()
        {
            return await _popAppContext.FreigthType.ToListAsync();
        }

        public async Task UpdateContainerType(int id, FreigthType type)
        {
            var updateType = await GetContainerType(id);
            if(updateType != null)
            {
                updateType.ContainerType = type.ContainerType;
                _popAppContext.Update(updateType);
                await _popAppContext.SaveChangesAsync();
            }
        }
    }
}
