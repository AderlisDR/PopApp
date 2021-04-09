namespace Boundaries.Persistence.Models.Schedule
{
    public class AddFreigthToScheduleVesselContainerRequest
    {
        public int ScheduleVesselContainerId { get; set; }
        public int FreigthId { get; set; }
    }
}
