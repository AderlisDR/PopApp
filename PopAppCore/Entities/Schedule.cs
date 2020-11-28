using PopAppCore.Dtos;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace PopAppCore.Entities
{
    public class Schedule
    {
        [Key]
        public int ScheduleId { get; set; }
        public DateTime ScheduleDate { get; set; }
        public int VesselId { get; set; }
        public DateTime CreateAt { get; set; }
        public bool IsActive { get; set; }
        public virtual IEnumerable<ContainerScheduleDto> ContainerSchedule { get; set; }
    }
}
