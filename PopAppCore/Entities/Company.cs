using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace PopApp.Core.Entities
{
    public class Company
    {
        [Key]
        public int CompanyId { get; set; }
        public string CompanyName { get; set; }
        public string CompanyCode { get; set; }
        public string CompanyAdrees { get; set; }
        public string CompanyPhone { get; set; }
        public bool IsActive { get; set; }
    }
}
