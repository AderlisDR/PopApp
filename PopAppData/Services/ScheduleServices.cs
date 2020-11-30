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
    public class ScheduleServices : IScheduleServices
    {
        private readonly PopAppContext _context;
        public ScheduleServices(PopAppContext context) => _context = context;
        public async Task CreateSchedule(Schedule schedule)
        {
            _context.Add(schedule);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteSchedule(int id)
        {
            var schedule = await GetSchedule(id);
            if(schedule != null)
            {
                schedule.IsActive = false;
                _context.Update(schedule);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<Schedule> GetSchedule(int id)
        {
            return await _context.Schedules.FirstOrDefaultAsync(schedule => schedule.ScheduleId == id);
        }

        public async Task<IEnumerable<Schedule>> GetSchedules()
        {
            return await _context.Schedules.ToListAsync();
        }

        public async Task UpdateSchedule(int id, Schedule schedule)
        {
            var scheduleUpdate = await GetSchedule(id);
            if (scheduleUpdate != null ){

                scheduleUpdate.ScheduleDate = schedule.ScheduleDate;
                scheduleUpdate.IsActive = schedule.IsActive;
                scheduleUpdate.CreateAt = DateTime.Now;
            }
        }
    }
}
