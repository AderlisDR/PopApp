namespace PopAppCore.Dtos
{
    public sealed class CommonStatisticsModel
    {
        public int ScheduledVesselsCount { get; set; }
        public int NoEvaluatedFreigthCount { get; set; }
        public int ApprovedFreigthCount { get; set; }
        public int RejectedFreigthCount { get; set; }
    }
}
