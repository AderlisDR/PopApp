using System.Collections.Generic;

namespace PopAppData.Models.Schedule
{
    public sealed class AddMultipleContainersToScheduleVesselRequest
    {
        public int ScheduleId { get; set; }
        public IList<int> ContainersId { get; set; }
    }
}
