using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mime;
using TuiFly.FlySearchApi.Api.Common.Helpers;
using TuiFly.FlySearchApi.Api.Common.Models;
using TuiFly.FlySearchApi.Api.Controllers.Airports.Models;

namespace TuiFly.FlySearchApi.Api.Controllers
{
    public partial class AirportsController : ControllerBase
    {
        /// <summary>
        /// Get list of airports
        /// </summary>
        /// <returns></returns>
        /// <response code="200">The airports list value found</response> 
        /// <response code="204">There is no content for this query</response> 
        /// <response code="500">Internal server error</response> 
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(IEnumerable<AirportsResponse>))]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError, Type = typeof(ServerError))]
        [Produces(MediaTypeNames.Application.Json)]
        public IActionResult GetAirports()
        {
            var response = _airportsManagerService.GetAllAirportsValue();
            if (response.Any())
            {
                return Ok(response.ToAirportModels());
            }

            return NoContent();
        }
    }
}
