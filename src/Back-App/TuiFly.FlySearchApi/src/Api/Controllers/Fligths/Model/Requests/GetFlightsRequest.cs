using System;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace TuiFly.FlySearchApi.Api.Controllers.Fligths.Model.Requests
{
    public class GetFlightsRequest
    {
        /// <summary>
        /// the airport or city departure 
        /// </summary>
        /// <example>ORY</example>
        [JsonPropertyName("departure")]
        public string Departure { get; set; }

        /// <summary>
        /// the airport or city arrival 
        /// </summary>
        /// <example>ACE</example>
        [JsonPropertyName("arrival")]
        public string Arrival { get; set; }

        /// <summary>
        /// the departure date
        /// </summary>
        /// <example>2023-08-20T10:50:06</example>
        [JsonPropertyName("departureDate")]
        public DateTime DepartureDate { get; set; }

        /// <summary>
        /// the Arrival date
        /// </summary>
        /// <example>2023-08-20T11:25:06</example>
        [JsonPropertyName("returnDate")]
        public DateTime ReturnDate { get; set; }

        /// <summary>
        /// the number of passenger for booking
        /// </summary>
        /// <example>1</example>
        [JsonPropertyName("passengerNumbers")]
        [Range(1, 200)]
        public int PassengerNumbers { get; set; }
    }
}
