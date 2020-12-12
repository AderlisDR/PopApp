using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace PopAppCore.Entities
{
   public class ContainerTypeModel
    {
        [Key]
        public int Id { get; set; }
        public string ContainerType { get; set; }
        public bool IsActive { get; set; }
    }
}
