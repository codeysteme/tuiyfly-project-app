using System;
using System.Text.Json.Serialization;

namespace TuiFly.BookingApi.Api.Controllers.Booking.Model.Responses
{
    public class BookingResponse
    {
        /// <summary>
        /// bboking id
        /// </summary>
        /// <example>$12</example>
        [JsonPropertyName("id")]
        public int Id { get; set; }

        /// <summary>
        /// booking username
        /// </summary>
        /// <example>clerc nicephore</example>
        [JsonPropertyName("username")]
        public string UserName { get; set; }

        /// <summary>
        /// booking client email
        /// </summary>
        /// <example>exmaple@gmail.com</example>
        [JsonPropertyName("email")]
        public string Email { get; set; }

        /// <summary>
        /// booking phone
        /// </summary>
        /// <example>+12456785</example>
        [JsonPropertyName("phone")]
        public string Phone { get; set; }

        /// <summary>
        /// booking date
        /// </summary>
        [JsonPropertyName("bookingDate")]
        public DateTime BookingDate { get; set; }

        /// <summary>
        /// booking flight id
        /// </summary>
        [JsonPropertyName("flightId")]
        public string FlightId { get; set; }
    }
}
