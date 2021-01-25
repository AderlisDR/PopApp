using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace PopAppCore.Entities
{
    public class ScheduleContainerFreigthProduct
    {
        [Key]
        public int Id { get; set; }
        public int ScheduleContainerFreigthId { get; set; }
        public int ProductId { get; set; }
        public virtual ScheduleContainerFreigth ScheduleContainerFreigth { get; set; }
        public virtual Product Product { get; set; }
    }
}
