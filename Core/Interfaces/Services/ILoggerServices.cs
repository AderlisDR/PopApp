﻿using Core.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Core.Interfaces.Services
{
    public interface ILoggerServices
    {
        Task<IEnumerable<Logger>> GetLoggers();
        Task<Logger> GetLogger(int id);
        Task CreateLogger(Logger logger);
    }
}