using System;
using System.Collections.Generic;
using System.Text;

namespace PopAppCore.Dtos
{
    public sealed class DocumentDto
    {
        public int DocumentId { get; set; }
        public string DocumentTitle { get; set; }
        public string DocumentDescription { get; set; }
        public string DocumentImage { get; set; }
        public DateTime CreateAt { get; set; }
        public bool IsActive { get; set; }
        public int VesselId { get; set; }
    }
}
