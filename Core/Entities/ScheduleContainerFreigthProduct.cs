using System.ComponentModel.DataAnnotations;

namespace Core.Entities
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
