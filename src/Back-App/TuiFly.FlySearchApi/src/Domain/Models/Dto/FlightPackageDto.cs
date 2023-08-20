namespace TuiFly.FlySearchApi.Domain.Models.Dto
{
    public class FlightPackageDto
    {
        /// <summary>
        /// the flight id
        /// </summary>
        /// <example>1</example>
        public int Id { get; set; }

        /// <summary>
        /// the flight price
        /// </summary>
        /// <example>$12</example>
        public decimal TotalPrice { get; set; }

        /// <summary>
        /// the departure flight
        /// </summary>
        public FlightDto Depature { get; set; }

        /// <summary>
        /// the arrival flight
        /// </summary>
        public FlightDto Arrival { get; set; }
    }
}
