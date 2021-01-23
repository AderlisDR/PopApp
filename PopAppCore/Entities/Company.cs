using System.ComponentModel.DataAnnotations;

namespace PopAppCore.Entities
{
    public sealed class Company
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
