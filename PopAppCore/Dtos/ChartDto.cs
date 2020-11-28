using System;
using System.Collections.Generic;
using System.Text;

namespace PopAppCore.Dtos
{
    public sealed class ChartDto
    {
        public int VesselCount { get; set; }
        public int ContainerCount { get; set; }
        public int FreigthCount { get; set; }
    }
}
