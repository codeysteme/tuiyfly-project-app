using System;

namespace TuiFly.FlySearchApi.Domain.Models.Dto
{
    public class FlightDto
    {
        /// <summary>
        /// the flight logo
        /// </summary>
        /// <example>https://https://localhost:44304/images/logo.png</example>
        public string Logo { get; set; }

        /// <summary>
        /// the flight price
        /// </summary>
        /// <example>$12</example>
        public decimal Price { get; set; }

        /// <summary>
        /// the departure airport
        /// </summary>
        public AirportDto DepartureAirport { get; set; }

        /// <summary>
        /// the arrival airport
        /// </summary>
        public AirportDto ArrivalAirport { get; set; }

        /// <summary>
        /// the departure date
        /// </summary>
        /// <example>2023-08-20T10:50:06</example>
        public DateTime DepartureDate { get; set; }

        /// <summary>
        /// the Arrival date
        /// </summary>
        /// <example>2023-08-20T11:25:06</example>
        public DateTime ArrivalDate { get; set; }
    }
}
