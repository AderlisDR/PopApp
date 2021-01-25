using System;
using System.ComponentModel.DataAnnotations;

namespace PopAppCore.Entities
{
    public sealed class Document
    {
        [Key]
        public int DocumentId { get; set; }
        public string DocumentTitle { get; set; }
        public string DocumentDescription { get; set; }
        public string DocumentImage { get; set; }
        public DateTime CreateAt { get; set; }
        public bool IsActive { get; set; }
        public int VesselId { get; set; }
    }
}
