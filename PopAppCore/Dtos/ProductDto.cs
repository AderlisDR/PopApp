using System;
using System.Collections.Generic;
using System.Text;

namespace PopAppCore.Dtos
{
    public sealed class ProductDto
    {
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public string ProductDescription { get; set; }
        public string ProductCategory { get; set; }
        public string IsActive { get; set; }
    }
}
