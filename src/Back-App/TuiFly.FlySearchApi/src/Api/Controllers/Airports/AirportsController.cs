using Microsoft.AspNetCore.Mvc;
using TuiFly.FlySearchApi.Domain.Interfaces;

namespace TuiFly.FlySearchApi.Api.Controllers
{
    /// <summary>
    /// AirportsController base
    /// </summary>
    [ApiController]
    [Route("api/[controller]")]
    public partial class AirportsController : ControllerBase
    {
        /// <summary>
        /// the airport service for manage all departure and arrival
        /// </summary>
        private readonly IAirportsManagerService _airportsManagerService;

        /// <summary>
        /// The ctor
        /// </summary>
        /// <param name="airportsManagerService">the airport service</param>
        public AirportsController(IAirportsManagerService airportsManagerService)
        {
            _airportsManagerService = airportsManagerService;
        }
    }
}
