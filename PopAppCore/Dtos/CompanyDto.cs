using System;
using System.Collections.Generic;
using System.Text;

namespace PopApp.Core.Dtos
{
    public sealed class CompanyDto
    {
        public int CompanyId { get; set; }
        public string CompanyName { get; set; }
        public string CompanyCode { get; set; }
        public string CompanyAdrees { get; set; }
        public string CompanyPhone { get; set; }
        public bool IsActive { get; set; }
    }
}
