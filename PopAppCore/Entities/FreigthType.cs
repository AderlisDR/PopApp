using PopAppCore.Enums;
using System.ComponentModel.DataAnnotations;

namespace PopAppCore.Entities
{
    public class FreigthType
    {
        [Key]
        public int Id { get; set; }
        public ContainerType ContainerType { get; set; }
        public string Name { get; set; }
        public bool IsActive { get; set; }
    }
}
