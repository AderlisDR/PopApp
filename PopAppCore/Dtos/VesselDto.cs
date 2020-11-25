using System;
using System.Collections.Generic;
using System.Text;

namespace PopApp.Core.Dtos
{
    public sealed class VesselDto
    {
        public int VesselId { get; set; }
        public string VesselName { get; set; }
        public string VesselCode { get; set; }
        public string VesselImo { get; set; }
        public string VesselFlag { get; set; }
        public string VesselSlora { get; set; }
        public string VesselArrival { get; set; }
        public bool IsActive { get; set; }
    }
}
