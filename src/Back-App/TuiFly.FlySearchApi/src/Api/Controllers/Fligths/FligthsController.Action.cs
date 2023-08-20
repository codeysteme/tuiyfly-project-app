using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using System.Net.Mime;
using TuiFly.FlySearchApi.Api.Common.Helpers;
using TuiFly.FlySearchApi.Api.Common.Models;
using TuiFly.FlySearchApi.Api.Controllers.Fligths.Model.Requests;
using TuiFly.FlySearchApi.Api.Controllers.Fligths.Model.Responses;

namespace TuiFly.FlySearchApi.Api.Controllers.Fligths
{
    public partial class FligthsController : ControllerBase
    {
        /// <summary>
        /// Get list of available flight for a user request
        /// </summary>
        /// <param name="getFlightsRequest">request for retreive a valid flights informations</param>
        /// <param name="paginationRequest">the pagination request</param>
        /// <returns></returns>
        /// <response code="200">The flights data list is found</response> 
        /// <response code="204">There is no content for this query</response> 
        /// <response code="400">Bad request provided</response> 
        /// <response code="500">Internal server error</response> 
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(FlightPackageResponse))]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError, Type = typeof(ServerError))]
        [Produces(MediaTypeNames.Application.Json)]
        public IActionResult GetAvailableFlights([FromQuery] GetFlightsRequest getFlightsRequest, [FromQuery] PaginationRequest paginationRequest)
        {
            var response = _flightsManagerService.GetflightsList(getFlightsRequest.ToFlightsRequestQuery(paginationRequest));
            if (response != null && response.Items.Any())
            {
                return Ok(response.ToflightsListResponse());
            }

            return NoContent();
        }
    }
}
