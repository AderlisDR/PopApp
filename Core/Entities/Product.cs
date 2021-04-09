using System.ComponentModel.DataAnnotations;

namespace Core.Entities
{
    public sealed class Product
    {
        [Key]
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public string ProductDescription { get; set; }
        public string ProductCategory { get; set; }
        public bool IsActive { get; set; }
    }
}
