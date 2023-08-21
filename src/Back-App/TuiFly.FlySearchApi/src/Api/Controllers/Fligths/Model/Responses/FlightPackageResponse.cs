using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace TuiFly.FlySearchApi.Api.Controllers.Fligths.Model.Responses
{
    public class FlightPackageResponse
    {
        /// <summary>
        /// the number of total data.
        /// </summary>
        [JsonPropertyName("totalResult")]
        public int TotalResult { get; set; }

        /// <summary>
        /// the number of pages.
        /// </summary>
        [JsonPropertyName("pageIndex")]
        public int PageIndex { get; set; }

        /// <summary>
        /// the Total Pages 
        /// </summary>
        /// <example>1</example>
        [JsonPropertyName("totalPages")]
        public int TotalPages { get; set; }

        /// <summary>
        /// the flights list
        /// </summary>
        [JsonPropertyName("flights")]
        public List<FlightPackageModel> Flights { get; set; }
    }
}
