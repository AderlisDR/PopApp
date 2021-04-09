using System;
using System.Collections.Generic;

namespace Core.Dtos
{
    public sealed class ScheduleDto
    {
        public DateTime ScheduleDate { get; set; }
        public DateTime CreateAt { get; set; }
        public bool IsActive { get; set; }
        public IEnumerable<ContainerScheduleDto> ContainerScheduleDto { get; set; }
    }
}
