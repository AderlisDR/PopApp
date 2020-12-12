using Microsoft.EntityFrameworkCore;
using PopApp.Core.Entities;
using PopAppCore.Entities;

namespace PopApp.Structure.Data
{
    public class PopAppContext: DbContext
    {
        public PopAppContext(DbContextOptions<PopAppContext> options): base(options) { }

        public virtual DbSet<Company> Companies { get; set; }
        public virtual DbSet<Container> Containers { get; set; }
        public virtual DbSet<Document> Documents { get; set; }
        public virtual DbSet<Freigth> Freigths { get; set; }
        public virtual DbSet<Product> Products { get; set; }
        public virtual DbSet<User> Users { get; set; }
        public virtual DbSet<Vessel> Vessels { get; set; }
        public virtual DbSet<Logger> Loggers { get; set; }
        public virtual DbSet<Schedule> Schedules { get; set; }
        public virtual DbSet<ContainerTypeModel> containerType { get; set; }
    }
}
