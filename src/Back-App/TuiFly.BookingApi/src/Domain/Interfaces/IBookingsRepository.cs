using System.Collections.Generic;
using System.Threading.Tasks;
using TuiFly.BookingApi.Domain.Entities;
using TuiFly.BookingApi.Domain.Models.Queries;

namespace TuiFly.BookingApi.Domain.Interfaces
{
    public interface IBookingsRepository
    {
        /// <summary>
        /// Get all available bookings
        /// </summary>
        /// <returns></returns>
        List<Booking> GetBookings();

        /// <summary>
        /// Get booking by Id
        /// </summary>
        /// <returns></returns>
        Booking GetBookingById(int bookingId);

        /// <summary>
        /// Get Bookikng By user email
        /// </summary>
        /// <param name="userEmail"></param>
        /// <returns></returns>
        List<Booking> GetBookingByEmail(string userEmail);

        /// <summary>
        /// create a booking Flights
        /// </summary>
        /// <param name="saveBookingQuery">save booking flights query</param>
        Task<bool> CreateBookingAsync(SaveBookingQuery bookingQuery);
    }
}
