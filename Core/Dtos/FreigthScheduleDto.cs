using System.Collections.Generic;

namespace Core.Dtos
{
    public sealed class FreigthScheduleDto
    {
        public string FreigthType { get; set; }
        public  IEnumerable<ProductScheduleDto> ProductSchedule { get; set; }
    }
}
