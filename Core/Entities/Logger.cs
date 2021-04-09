using System;
using System.ComponentModel.DataAnnotations;

namespace Core.Entities
{
    public sealed class Logger
    {
        [Key]
        public int LoggerId { get; set; }
        public string Screen { get; set; }

        public string UserName { get; set; }
        public string Process { get; set; }
        public DateTime LoggerDate { get; set; }
    }
}
