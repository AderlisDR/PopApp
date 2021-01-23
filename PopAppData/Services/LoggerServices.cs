using Microsoft.EntityFrameworkCore;
using PopAppCore.Entities;
using PopApp.Structure.Data;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using PopAppCore.Interfaces.Services;

namespace PopApp.Structure.Services
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
