﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PopAppCore.Entities
{
    public sealed class Container
    {
        [Key]
        public int ContainerId { get; set; }
        public string ContainerType { get; set; }
        [Column(TypeName = "decimal(4,2)")]
        public decimal? ContainerPayload { get; set; }
        [Column(TypeName = "decimal(4,2)")]
        public decimal? ContainerCapacity { get; set; }
        [Column(TypeName = "decimal(4,2)")]
        public decimal? ContainerLenth { get; set; }
        [Column(TypeName = "decimal(4,2)")]
        public decimal? ContainerWidth { get; set; }
        [Column(TypeName = "decimal(4,2)")]
        public decimal? ContainerHeigth { get; set; }
        public bool IsActive { get; set; }

    }
}
