using System;

namespace TuiFly.BookingApi.Domain.Models.Queries
{
    public class SaveBookingQuery
    {
        /// <summary>
        /// client username
        /// </summary>
        /// <example>Clerc NKOUNKOU</example>
        public string UserName { get; set; }

        /// <summary>
        /// client email
        /// </summary>
        /// <example>nkounkounicephore@gmail.com</example>
        public string Email { get; set; }

        /// <summary>
        /// client phone number
        /// </summary>
        /// <example>+212613767995</example>
        public string Phone { get; set; }

        /// <summary>
        /// booking datetime
        /// </summary>
        public DateTime BookingDate { get; set; }

        /// <summary>
        /// the flight id
        /// </summary>
        /// <example>ORL-ORT</example>
        public string FlightId { get; set; }
    }
}
