using System.ComponentModel.DataAnnotations;

namespace PopAppCore.Entities
{
    public class ScheduleContainer
    {
        [Key]
        public int Id { get; set; }
        public int ScheduleId { get; set; }
        public int ContainerId { get; set; }
        public virtual Schedule Schedule { get; set; }
        public virtual Container Container { get; set; }
    }
}
