using System;
using System.Collections.Generic;
using System.Linq;
using TuiFly.BookingApi.Api.Controllers.Booking.Model.Requests;
using TuiFly.BookingApi.Api.Controllers.Booking.Model.Responses;
using TuiFly.BookingApi.Domain.Entities;
using TuiFly.BookingApi.Domain.Models.Queries;

namespace TuiFly.BookingApi.Api.Common.Helpers
{
    public static class ApiBuilder
    {
        /// <summary>
        /// Build flight booking request query
        /// </summary>
        /// <param name="saveBookingRequest">Api flight booking request</param>
        /// <returns></returns>
        public static SaveBookingQuery ToSaveBookingQuery(this SaveBookingRequest saveBookingRequest)
        {
            return new SaveBookingQuery
            {
                Email = saveBookingRequest.Email,
                Phone = saveBookingRequest.Phone,
                UserName = saveBookingRequest.UserName,
                BookingDate = DateTime.UtcNow,
                FlightId = saveBookingRequest.FlightId
            };
        }

        /// <summary>
        /// build bookings response list model
        /// </summary>
        /// <param name="bookings"></param>
        /// <returns></returns>
        public static IEnumerable<BookingResponse> ToBookingResponses(this IEnumerable<Booking> bookings)
        {
            return bookings.Select(a => a.ToBookingResponse()).ToList();
        }

        /// <summary>
        /// build booking response model
        /// </summary>
        /// <param name="booking"></param>
        /// <returns></returns>
        public static BookingResponse ToBookingResponse(this Booking booking)
        {
            return new BookingResponse
            {
                Email = booking.Email,
                Id = booking.Id,
                Phone = booking.Phone,
                UserName = booking.UserName,
                BookingDate = Convert.ToDateTime(booking.BookingDate),
                FlightId = booking.FlightId
            };
        }
    }
}
