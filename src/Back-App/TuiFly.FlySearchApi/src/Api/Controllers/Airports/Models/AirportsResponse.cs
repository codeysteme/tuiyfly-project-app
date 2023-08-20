using System.Text.Json.Serialization;

namespace TuiFly.FlySearchApi.Api.Controllers.Airports.Models
{
    public class AirportsResponse
    {
        /// <summary>
        /// the airport name
        /// </summary>
        /// <example>ACE</example>
        [JsonPropertyName("id")]
        public string Id { get; set; }

        /// <summary>
        /// check if airport is available
        /// </summary>
        /// <example>true</example>
        [JsonPropertyName("available")]
        public bool Available { get; set; }

        /// <summary>
        /// the airport countryName
        /// </summary>
        /// <example>Espagne</example>
        [JsonPropertyName("countryName")]
        public string CountryName { get; set; }

        /// <summary>
        /// the airport name (city)
        /// </summary>
        /// <example>Lanzarote</example>
        [JsonPropertyName("name")]
        public string Name { get; set; }
    }
}
