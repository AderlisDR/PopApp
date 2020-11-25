using System.Collections.Generic;

namespace PopAppCore.Dtos
{
    public class FreigthScheduleDto
    {
        public string FreigthType {get; set;}
        public virtual IEnumerable<ProductScheduleDto> ProductSchedule { get; set; }
    }
}
