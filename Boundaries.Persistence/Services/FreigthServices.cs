using Boundaries.Persistence.Data;
using Core.Entities;
using Core.Interfaces.Services;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Boundaries.Persistence.Services
{
    public class FreigthServices : IFreigthServices
    {
        private readonly PopAppContext _context;

        public FreigthServices(PopAppContext context)
        {
            _context = context;
        }

        public async Task<int> CreateFreigth(Freigth freigth)
        {
            _context.Add(freigth);
            await _context.SaveChangesAsync();

            return freigth.FreigthId;
        }

        public async Task DeleteFreigth(int id)
        {
            var freigth = await GetFreigth(id);

            if (freigth != null)
            {
                freigth.IsActive = false;
                _context.Update(freigth);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<Freigth> GetFreigth(int id)
        {
            var freigth = await _context.Freigths.FirstOrDefaultAsync(opt => opt.FreigthId == id);
            return freigth;
        }

        public async Task<IEnumerable<Freigth>> GetFreigths()
        {
            var freigth = await _context.Freigths.ToListAsync();
            return freigth;
        }

        public async Task UpdateFreigth(int id, Freigth freigth)
        {
            var updateFreigth = await GetFreigth(id);
            if (updateFreigth != null)
            {
                updateFreigth.FreigthCode = freigth.FreigthCode;
                updateFreigth.FreigthDescription = freigth.FreigthDescription;
                updateFreigth.FreigthType = freigth.FreigthType;
                updateFreigth.FreigthWeigth = freigth.FreigthWeigth;
                updateFreigth.IsActive = true;
                _context.Update(updateFreigth);
                await _context.SaveChangesAsync();
            }
        }
    }
}
