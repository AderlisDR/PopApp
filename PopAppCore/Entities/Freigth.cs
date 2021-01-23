using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PopAppCore.Entities
{
    public sealed class Freigth
    {
        [Key]
        public int FreigthId { get; set; }
        public string FreigthCode { get; set; }
        public string FreigthDescription { get; set; }
        public string FreigthType { get; set; }
        [Column(TypeName = "decimal(4,2)")]
        public decimal FreigthWeigth { get; set; }
        public bool IsActive { get; set; }
    }
}
