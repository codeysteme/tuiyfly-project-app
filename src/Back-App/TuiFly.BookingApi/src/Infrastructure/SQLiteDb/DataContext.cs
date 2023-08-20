using Microsoft.EntityFrameworkCore;
using TuiFly.BookingApi.Domain.Entities;

namespace TuiFly.BookingApi.Infrastructure.SQLiteDb
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Booking> Bookings { get; set; }
    }
}
