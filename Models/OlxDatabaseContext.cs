using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using SD_Project.Models.Storage;
using SD_Project.Models.Users;

namespace SD_Project.Models
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
        public DbSet<Seller> Sellers { get; set; }
        public DbSet<Buyer> Buyers { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<Category> Categories { get; set; }
    }
}
