using System.Text.Json.Serialization;

namespace TuiFly.FlySearchApi.Api.Controllers.Fligths.Model.Responses
{
    public class FlightPackageModel
    {
        /// <summary>
        /// the flight id
        /// </summary>
        /// <example>1</example>
        [JsonPropertyName("id")]
        public int Id { get; set; }

        /// <summary>
        /// the flight price
        /// </summary>
        /// <example>$12</example>
        [JsonPropertyName("totalPrice")]
        public string TotalPrice { get; set; }

        /// <summary>
        /// the departure flight
        /// </summary>
        [JsonPropertyName("departure")]
        public FlightModel Depature { get; set; }

        /// <summary>
        /// the arrival flight
        /// </summary>
        [JsonPropertyName("arrival")]
        public FlightModel Arrival { get; set; }
    }
}
