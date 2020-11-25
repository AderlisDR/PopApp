using System;
using System.Collections.Generic;
using System.Text;

namespace PopApp.Core.Dtos
{
    public sealed class DocumentDto
    {
        public int DocumentId { get; set; }
        public string DocumentTitle { get; set; }
        public string DocumentDescription { get; set; }
        public byte[] DocumentImage { get; set; }
        public DateTime CreateAt { get; set; }
        public bool IsActive { get; set; }
    }
}
