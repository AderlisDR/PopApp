using System;
using System.Collections.Generic;
using System.Text;

namespace PopApp.Core.Dtos
{
    public sealed class FreigthDto
    {
        public int FreigthId { get; set; }
        public string FreigthCode { get; set; }
        public string FreigthDescription { get; set; }
        public string FreigthType { get; set; }
        public decimal FreigthWeigth { get; set; }
        public bool IsActive { get; set; }
    }
}
