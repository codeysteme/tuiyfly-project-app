using System.Collections.Generic;
using TuiFly.FlySearchApi.Domain.Models.Dto;

namespace TuiFly.FlySearchApi.Domain.Interfaces
{
    public interface IAirportsRepositoryService
    {
        /// <summary>
        /// Get list of airport data
        /// </summary>
        /// <returns></returns>
        IEnumerable<AirportDto> GetAirportList();
    }
}
