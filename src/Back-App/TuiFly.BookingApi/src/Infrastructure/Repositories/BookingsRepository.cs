using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TuiFly.BookingApi.Domain.Entities;
using TuiFly.BookingApi.Domain.Interfaces;
using TuiFly.BookingApi.Domain.Models.Queries;
using TuiFly.BookingApi.Infrastructure.SQLiteDb;

namespace TuiFly.BookingApi.Infrastructure.Repositories
{
    public class BookingsRepository : IBookingsRepository
    {
        /// <summary>
        /// the db context
        /// </summary>
        private readonly DataContext _context;

        public BookingsRepository(DataContext context)
        {
            _context = context;
        }

        /// <summary>
        /// Get all available bookings
        /// </summary>
        /// <returns></returns>
        public List<Booking> GetBookings()
        {
            return _context.Bookings.ToList();
        }

        /// <summary>
        /// Get booking by Id
        /// </summary>
        /// <returns></returns>
        public Booking GetBookingById(int bookingId)
        {
            return _context.Bookings.Where(x => x.Id == bookingId).FirstOrDefault();
        }

        /// <summary>
        /// Get Bookikng By user email
        /// </summary>
        /// <param name="userEmail"></param>
        /// <returns></returns>
        public List<Booking> GetBookingByEmail(string userEmail)
        {
            return _context.Bookings.Where(x => x.Email.Equals(userEmail)).ToList();
        }

        /// <summary>
        /// create a booking Flights
        /// </summary>
        /// <param name="saveBookingQuery">save booking flights query</param>
        public async Task<bool> CreateBookingAsync(SaveBookingQuery bookingQuery)
        {
            var ckeck = _context.Bookings.Where(x => x.FlightId == bookingQuery.FlightId
                && x.Email.Equals(bookingQuery.Email)).FirstOrDefault();
            if (ckeck != null)
            {
                throw new Exception("DUPLICATED - Erreur booking already exist");
            }

            await _context.Bookings.AddAsync(new Booking
            {
                BookingDate = DateTime.Now.ToString(),
                Email = bookingQuery.Email,
                Phone = bookingQuery.Phone,
                UserName = bookingQuery.UserName,
                FlightId = bookingQuery.FlightId
            });

            return await _context.SaveChangesAsync() == 1;
        }
    }
}
