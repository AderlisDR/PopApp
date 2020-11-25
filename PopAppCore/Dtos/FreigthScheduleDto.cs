using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Text;

namespace PopAppCore.Dtos
{
    public class FreigthScheduleDto
    {
        public string FreigthType {get; set;}
        public virtual Collection<ProductScheduleDto> ProductSchedule { get; set; }
    }
}
