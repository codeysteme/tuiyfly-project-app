using Microsoft.EntityFrameworkCore;
using TuiFly.BookingApi.Domain.Entities;

namespace TuiFly.BookingApi.Infrastructure.SQLiteDb
{
    public class DataContext : DbContext
    {
        public DbSet<Booking> Bookings { get; set; }

        public DataContext(DbContextOptions options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Booking>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.Property(e => e.UserName);
                entity.Property(e => e.Email);
                entity.Property(e => e.Phone);
                entity.Property(e => e.BookingDate);
                entity.Property(e => e.FlightId);

                entity.HasData(new Booking
                {
                    Id = 1,
                    Phone = "+21261126451",
                    Email = "test@gmail.com",
                    UserName = "clerc nicephore",
                    FlightId = "ncn-ory",
                    BookingDate = "2023-08-19T21:57:54"
                });
            });
        }
    }
}
