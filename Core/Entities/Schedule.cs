using System;
using System.ComponentModel.DataAnnotations;

namespace Core.Entities
{
    public class Schedule
    {
        [Key]
        public int ScheduleId { get; set; }
        public DateTime ScheduleDate { get; set; }
        public int VesselId { get; set; }
        public DateTime CreateAt { get; set; }
        public bool IsActive { get; set; }
        public virtual Vessel Vessel { get; set; }
    }
}
