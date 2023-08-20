using System.Text.Json.Serialization;

namespace TuiFly.BookingApi.Api.Controllers.Booking.Model.Requests
{
    public class SaveBookingRequest
    {
        /// <summary>
        /// client username
        /// </summary>
        /// <example>Clerc NKOUNKOU</example>
        [JsonPropertyName("userName")]
        public string UserName { get; set; }

        /// <summary>
        /// client email
        /// </summary>
        /// <example>nkounkounicephore@gmail.com</example>
        [JsonPropertyName("email")]
        public string Email { get; set; }

        /// <summary>
        /// client phone number
        /// </summary>
        /// <example>+212613767995</example>
        [JsonPropertyName("phone")]
        public string Phone { get; set; }

        /// <summary>
        /// the flight id
        /// </summary>
        /// <example>ORL-ORT</example>
        [JsonPropertyName("flightId")]
        public string FlightId { get; set; }
    }
}
