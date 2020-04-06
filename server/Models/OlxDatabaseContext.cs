using Microsoft.EntityFrameworkCore;
using SD_Project.Models.Users;
using SD_Project.server.Models.Storage;

namespace SD_Project.server.Models
{
    public partial class OlxDatabaseContext : DbContext
    {
        public OlxDatabaseContext()
        {
        }

        public OlxDatabaseContext(DbContextOptions<OlxDatabaseContext> options)
            : base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Server=localhost,1433;Database=OlxDatabase;User=SA;Password=Copacverde125!;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
        
        public DbSet<Admin> Admins { get; set; }
        public DbSet<Advertiser> Advertisers { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Ad> Ads { get; set; }
    }
}
