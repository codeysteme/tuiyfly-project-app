using System.Collections.Generic;
using TuiFly.FlySearchApi.Domain.Interfaces;
using TuiFly.FlySearchApi.Domain.Models.Dto;

namespace TuiFly.FlySearchApi.Domain.Services
{
    public class AirportsManagerService : IAirportsManagerService
    {
        /// <summary>
        /// the airports repository services
        /// </summary>
        private readonly IAirportsRepositoryService _airportsRepository;

        /// <summary>
        /// the ctor
        /// </summary>
        /// <param name="airportsRepositoryService"></param>
        public AirportsManagerService(IAirportsRepositoryService airportsRepositoryService)
        {
            _airportsRepository = airportsRepositoryService;
        }


        /// <summary>
        /// Get list of airport data
        /// </summary>
        /// <returns></returns>
        public IEnumerable<AirportDto> GetAllAirportsValue()
        {
            return _airportsRepository.GetAirportList();
        }
    }
}
