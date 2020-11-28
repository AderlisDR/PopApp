using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace PopApp.Core.Entities
{
    public sealed class Document
    {
        [Key]
        public int DocumentId { get; set; }
        public string DocumentTitle { get; set; }
        public string DocumentDescription { get; set; }
        public byte[] DocumentImage { get; set; }
        public DateTime CreateAt { get; set; }
        public bool IsActive { get; set; }
    }
}
