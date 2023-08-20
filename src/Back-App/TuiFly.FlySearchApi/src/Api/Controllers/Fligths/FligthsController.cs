using Microsoft.AspNetCore.Mvc;
using TuiFly.FlySearchApi.Domain.Interfaces;

namespace TuiFly.FlySearchApi.Api.Controllers.Fligths
{
    /// <summary>
    /// FligthsController base
    /// </summary>
    [ApiController]
    [Route("api/[controller]")]
    public partial class FligthsController : ControllerBase
    {
        /// <summary>
        /// the flight service for manage all flight search
        /// </summary>
        private readonly IFlightsManagerService _flightsManagerService;

        /// <summary>
        /// The ctor
        /// </summary>
        /// <param name="flightsManagerService">the flight manager service</param>
        public FligthsController(IFlightsManagerService flightsManagerService)
        {
            _flightsManagerService = flightsManagerService;
        }
    }
}
