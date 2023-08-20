namespace TuiFly.FlySearchApi.Domain.Models.Dto
{
    /// <summary>
    /// the airport dto model
    /// </summary>
    public class AirportDto
    {
        /// <summary>
        /// the airport name
        /// </summary>
        /// <example>ACE</example>
        public string Id { get; set; }

        /// <summary>
        /// check if airport is available
        /// </summary>
        /// <example>true</example>
        public bool Available { get; set; }

        /// <summary>
        /// the airport countryName
        /// </summary>
        /// <example>Espagne</example>
        public string CountryName { get; set; }

        /// <summary>
        /// the airport name (city)
        /// </summary>
        /// <example>Lanzarote</example>
        public string Name { get; set; }
    }
}
