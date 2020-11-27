using System;
using System.Collections.Generic;
using System.Text;

namespace PopApp.Core.Dtos
{
    public class ContainerDto
    {
        public int ContainerId { get; set; }
        public string ContainerType { get; set; }
        public decimal ContainerPayload { get; set; }
        public decimal ContainerCapacity { get; set; }
        public decimal ContainerLenth { get; set; }
        public decimal ContainerWidth { get; set; }
        public decimal ContainerHeigth { get; set; }
        public bool IsActive { get; set; }
    }
}
