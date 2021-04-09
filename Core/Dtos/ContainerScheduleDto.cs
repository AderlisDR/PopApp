using System.Collections.Generic;

namespace Core.Dtos
{
    public sealed class ContainerScheduleDto
    {
        public string ContainerType { get; set; }
        public string CompanyCode { get; set; }
        public string Process { get; set; }
        public bool  ContainerCheck { get; set; }
        public  IEnumerable<FreigthScheduleDto> FreigthSchedule { get; set; }
    }
}
