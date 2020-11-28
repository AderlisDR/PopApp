using System;
using System.Collections.Generic;
using System.Text;

namespace PopAppCore.Dtos
{
    public sealed class ScheduleDto
    {
        public DateTime ScheduleDate { get; set; }
        public DateTime CreateAt { get; set; }
        public bool IsActive { get; set; }
        
    }
}
