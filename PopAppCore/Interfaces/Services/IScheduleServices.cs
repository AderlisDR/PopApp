using PopAppCore.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace PopAppCore.Interfaces.Services
{
    public interface IScheduleServices
    {
        Task<IEnumerable<Schedule>> GetSchedules();
        Task<Schedule> GetSchedule(int id);
        Task CreateSchedule(Schedule schedule);
        Task UpdateSchedule(int id, Schedule schedule);
        Task DeleteSchedule(int id);
    }
}
