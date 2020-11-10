using Microsoft.EntityFrameworkCore;
using PopApp.Core.Entities;
using PopApp.Core.Interfaces.Services;
using PopApp.Structure.Data;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace PopApp.Structure.Services
{
    public class ContainerServices : IContainerServices
    {
        private readonly PopAppContext _context;
        public ContainerServices(PopAppContext context)
        {
            _context = context;
        }
        public async Task CreateContainer(Container container)
        {
            _context.Add(container);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteContainer(int id)
        {
            var container = await GetContainer(id);

            if (container != null)
            {
                container.IsActive = false;
                _context.Update(container);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<Container> GetContainer(int id)
        {
            var container = await _context.Containers.FirstOrDefaultAsync(opt => opt.ContainerId == id);
            return container;
        }

        public async Task<IEnumerable<Container>> GetContainers()
        {
            var container = await _context.Containers.ToListAsync();
            return container;
        }

        public async Task UpdateContainer(int id, Container container)
        {
            var updateContainer = await GetContainer(id);
            if (updateContainer != null)
            {
                updateContainer.ContainerType = container.ContainerType;
                updateContainer.ContainerPayload = container.ContainerPayload;
                updateContainer.ContainerCapacity = container.ContainerCapacity;
                updateContainer.ContainerLenth = container.ContainerLenth;
                updateContainer.ContainerWidth = container.ContainerWidth;
                updateContainer.ContainerHeigth = container.ContainerHeigth;
                updateContainer.IsActive = true;
                _context.Update(updateContainer);
                await _context.SaveChangesAsync();

            }
        }
    }
}
