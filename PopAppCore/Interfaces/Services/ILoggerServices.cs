using PopApp.Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace PopApp.Core.Interfaces.Services
{
    public interface ILoggerServices
    {
        Task<IEnumerable<Logger>> GetLoggers();
        Task<Logger> GetLogger(int id);
        Task CreateLogger(Logger logger);
    }
}
