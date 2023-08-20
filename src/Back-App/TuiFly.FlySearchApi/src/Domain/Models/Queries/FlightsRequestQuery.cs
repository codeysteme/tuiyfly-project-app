using System;

namespace TuiFly.FlySearchApi.Domain.Models.Queries
{
    public class FlightsRequestQuery
    {
        /// <summary>
        /// the airport or city departure 
        /// </summary>
        /// <example>ORY</example>
        public string Departure { get; set; }

        /// <summary>
        /// the airport or city arrival 
        /// </summary>
        /// <example>ACE</example>
        public string Arrival { get; set; }

        /// <summary>
        /// the departure date
        /// </summary>
        /// <example>2023-08-20T10:50:06</example>
        public DateTime DepartureDate { get; set; }

        /// <summary>
        /// the Arrival date
        /// </summary>
        /// <example>2023-08-20T11:25:06</example>
        public DateTime ReturnDate { get; set; }

        /// <summary>
        /// the number of passenger for booking
        /// </summary>
        /// <example>1</example>
        public int PassengerNumbers { get; set; }

        /// <summary>
        /// The index of the current page of items.
        /// </summary>
        public int PageIndex { get; set; }

        /// <summary>
        /// Maximum number of items to return per page.
        /// </summary>
        public int PageSize { get; set; }
    }
}
