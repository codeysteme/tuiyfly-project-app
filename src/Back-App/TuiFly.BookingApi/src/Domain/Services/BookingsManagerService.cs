using System.Collections.Generic;
using System.Threading.Tasks;
using TuiFly.BookingApi.Domain.Entities;
using TuiFly.BookingApi.Domain.Interfaces;
using TuiFly.BookingApi.Domain.Models.Queries;

namespace TuiFly.BookingApi.Domain.Services
{
    public class BookingsManagerService : IBookingsManagerService
    {
        /// <summary>
        /// Booking service repository
        /// </summary>
        private readonly IBookingsRepository _bookingsRepository;

        /// <summary>
        /// the ctor
        /// </summary>
        /// <param name="bookingsRepository"></param>
        public BookingsManagerService(IBookingsRepository bookingsRepository)
        {
            _bookingsRepository = bookingsRepository;
        }

        /// <summary>
        /// Save a booking Flights
        /// </summary>
        /// <param name="saveBookingQuery">save booking flights query</param>
        public async Task<bool> CreateBooking(SaveBookingQuery saveBookingQuery)
        {
            return await _bookingsRepository.CreateBookingAsync(saveBookingQuery).ConfigureAwait(false);
        }

        /// <summary>
        /// Get all available bookings
        /// </summary>
        /// <returns></returns>
        public List<Booking> GetBookings()
        {
            return _bookingsRepository.GetBookings();
        }

        /// <summary>
        /// Get booking by Id
        /// </summary>
        /// <returns></returns>
        public Booking GetBookingById(int bookingId)
        {
            return _bookingsRepository.GetBookingById(bookingId);
        }

        /// <summary>
        /// Get Bookikng By user email
        /// </summary>
        /// <param name="userEmail"></param>
        /// <returns></returns>
        public List<Booking> GetBookingByEmail(string userEmail)
        {
            return _bookingsRepository.GetBookingByEmail(userEmail);
        }
    }
}
