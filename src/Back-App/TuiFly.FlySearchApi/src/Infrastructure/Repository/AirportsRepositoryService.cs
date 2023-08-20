using System.Collections.Generic;
using TuiFly.FlySearchApi.Domain.Interfaces;
using TuiFly.FlySearchApi.Domain.Models.Dto;
using TuiFly.FlySearchApi.Infrastructure.Mock.Tools;

namespace TuiFly.FlySearchApi.Infrastructure.Repository
{
    public class AirportsRepositoryService : IAirportsRepositoryService
    {
        /// <summary>
        /// Get list of airport data
        /// </summary>
        /// <returns></returns>
        public IEnumerable<AirportDto> GetAirportList()
        {
            return ReadFixtureFiles.ReadAndDeserialize<IEnumerable<AirportDto>>("Mock/Fixtures/airports");
        }
    }
}
