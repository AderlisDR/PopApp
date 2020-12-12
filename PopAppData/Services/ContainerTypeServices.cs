using Microsoft.EntityFrameworkCore;
using PopApp.Structure.Data;
using PopAppCore.Entities;
using PopAppCore.Interfaces.Services;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace PopAppData.Services
{
    public class ContainerTypeServices : IContainerTypeServices
    {
        private readonly PopAppContext _popAppContext;

        public ContainerTypeServices(PopAppContext context) => _popAppContext = context;

        public async Task CreateContainerType(ContainerTypeModel type)
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

        public Task<ContainerTypeModel> GetContainerType(int id)
        {
            return _popAppContext.containerType.FirstOrDefaultAsync(type => type.Id == id);
        }

        public async Task<IEnumerable<ContainerTypeModel>> GetContainerTypes()
        {
            return await _popAppContext.containerType.ToListAsync();
        }

        public async Task UpdateContainerType(int id, ContainerTypeModel type)
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
