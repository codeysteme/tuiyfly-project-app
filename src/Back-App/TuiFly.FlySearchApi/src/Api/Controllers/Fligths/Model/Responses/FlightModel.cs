using System;
using System.Text.Json.Serialization;
using TuiFly.FlySearchApi.Api.Controllers.Airports.Models;

namespace TuiFly.FlySearchApi.Api.Controllers.Fligths.Model.Responses
{
    public class FlightModel
    {
        /// <summary>
        /// the flight logo
        /// </summary>
        /// <example>https://https://localhost:44304/images/logo.png</example>
        [JsonPropertyName("logo")]
        public string Logo { get; set; }

        /// <summary>
        /// the flight price
        /// </summary>
        /// <example>$12</example>
        [JsonPropertyName("price")]
        public string Price { get; set; }

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
        [JsonPropertyName("arrivalDate")]
        public DateTime ArrivalDate { get; set; }

        /// <summary>
        /// the departure airport
        /// </summary>
        /// <example>ACE</example>
        [JsonPropertyName("departureAirport")]
        public AirportsResponse DepartureAirport { get; set; }

        /// <summary>
        /// the arrival airport
        /// </summary>
        /// <example>ORL</example>
        [JsonPropertyName("arrivalAirport")]
        public AirportsResponse ArrivalAirport { get; set; }
    }
}
