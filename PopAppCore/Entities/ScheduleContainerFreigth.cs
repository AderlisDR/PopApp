using PopAppCore.Enums;
using System.ComponentModel.DataAnnotations;

namespace PopAppCore.Entities
{
    public class ScheduleContainerFreigth
    {
        [Key]
        public int Id { get; set; }
        public int ScheduleContainerId { get; set; }
        public int FreigthId { get; set; }
        public virtual ScheduleContainer ScheduleContainer { get; set; }
        public virtual Freigth Freigth { get; set; }
        public EvaluationStatus EvaluationStatus { get; set; }
        public string EvaluationMessage { get; set; }
    }
}
