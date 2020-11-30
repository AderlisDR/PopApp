﻿using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace PopApp.Core.Entities
{
    public class Vessel
    {
        [Key]
        public int VesselId { get; set; }
        public string VesselName { get; set; }
        public string VesselCode { get; set; }
        public string VesselImo { get; set; }
        public string VesselFlag { get; set; }
        public string VesselSlora { get; set; }
        public string VesselArrival { get; set; }
        public bool IsActive { get; set; }
        public virtual IEnumerable<Document> Documents { get; set; }
        public virtual IEnumerable<Container> Containers { get; set; }
    }
}
