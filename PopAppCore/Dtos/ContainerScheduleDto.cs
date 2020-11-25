using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Text;

namespace PopAppCore.Dtos
{
    public class ContainerScheduleDto
    {
        public string ContainerType { get; set; }
        public string CompanyCode { get; set; }
        public string VesselName { get; set; }
        public string Process { get; set; }
        public bool  ContainerCheck { get; set; }
        public virtual Collection<FreigthScheduleDto> FreigthSchedule { get; set; }

    }
}
