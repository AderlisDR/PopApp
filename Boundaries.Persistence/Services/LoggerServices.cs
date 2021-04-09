using Boundaries.Persistence.Data;
using Core.Entities;
using Core.Interfaces.Services;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Boundaries.Persistence.Services
{
    public class LoggerServices : ILoggerServices
    {
        private readonly PopAppContext _context;

        public LoggerServices(PopAppContext context)
        {
            _context = context;
        }
        public async Task CreateLogger(Logger logger)
        {
            _context.Add(logger);
            await _context.SaveChangesAsync();
        }

        public async Task<Logger> GetLogger(int id)
        {
            return await _context.Loggers.FirstOrDefaultAsync(opt => opt.LoggerId == id);
        }

        public async Task<IEnumerable<Logger>> GetLoggers()
        {
            return await _context.Loggers.ToListAsync();
        }
    }
}
