using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Internal;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Net.Mime;
using System.Threading.Tasks;
using TuiFly.BookingApi.Api.Common.Helpers;
using TuiFly.BookingApi.Api.Common.Models;
using TuiFly.BookingApi.Api.Controllers.Booking.Model.Requests;
using TuiFly.BookingApi.Api.Controllers.Booking.Model.Responses;

namespace TuiFly.BookingApi.Api.Controllers.Fligths
{
    public partial class BookingsController : ControllerBase
    {
        /// <summary>
        /// Get all available bookings
        /// </summary>
        /// <returns></returns>
        /// <response code="200">The booking flights list is found</response> 
        /// <response code="204">No bookings flights found</response> 
        /// <response code="409">Bad request provided</response> 
        /// <response code="500">Internal server error</response> 
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(IEnumerable<BookingResponse>))]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError, Type = typeof(ServerError))]
        [Produces(MediaTypeNames.Application.Json)]
        public IActionResult GetBookings()
        {
            var response = _bookingsManagerService.GetBookings();
            if (response.Any())
            {
                return Ok(response.ToBookingResponses());
            }

            return NoContent();
        }

        /// <summary>
        /// Get all available bookings by user email
        /// </summary>
        /// <returns></returns>
        /// <response code="200">The booking flights list is found</response> 
        /// <response code="204">No bookings flights found</response> 
        /// <response code="409">Bad request provided</response> 
        /// <response code="500">Internal server error</response> 
        [HttpGet("email")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(IEnumerable<BookingResponse>))]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError, Type = typeof(ServerError))]
        [Produces(MediaTypeNames.Application.Json)]
        public IActionResult GetBookingsByEmail([FromQuery][Required] string email)
        {
            var response = _bookingsManagerService.GetBookingByEmail(email);
            if (response.Any())
            {
                return Ok(response.ToBookingResponses());
            }

            return NoContent();
        }

        /// <summary>
        /// Get flight booking by Id
        /// </summary>
        /// <returns></returns>
        /// <response code="200">The booking flights is found</response> 
        /// <response code="204">No bookings flights found</response> 
        /// <response code="409">Bad request provided</response> 
        /// <response code="500">Internal server error</response> 
        [HttpGet("{bookingId}")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(BookingResponse))]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError, Type = typeof(ServerError))]
        [Produces(MediaTypeNames.Application.Json)]
        public IActionResult GetBookingById(int bookingId)
        {
            var response = _bookingsManagerService.GetBookingById(bookingId);
            if (response != null)
            {
                return Ok(response.ToBookingResponse());
            }

            return NoContent();
        }

        /// <summary>
        /// Create booking flights 
        /// </summary>
        /// <param name="saveBookingRequest">request for booking a fligths</param>
        /// <returns></returns>
        /// <remarks>
        /// example request:
        ///
        ///     POST api/bookings
        ///     {
        ///         "userName": "Clerc NKOUNKOU",
        ///         "email": "nkounkounicephore@gmail.com",
        ///         "phone": "+212613767995",
        ///         "flightId" : "ncn-orl"
        ///     }
        /// </remarks>
        /// <response code="201">The booking flights is success</response> 
        /// <response code="400">Bad request provided</response> 
        /// <response code="409">Bad request provided</response> 
        /// <response code="500">Internal server error</response> 
        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status409Conflict)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError, Type = typeof(ServerError))]
        [Produces(MediaTypeNames.Application.Json)]
        public async Task<IActionResult> CreateBooking([FromBody][Required] SaveBookingRequest saveBookingRequest)
        {
            try
            {
                var isSuccess = await _bookingsManagerService.CreateBooking(saveBookingRequest.ToSaveBookingQuery()).ConfigureAwait(false);
                if (isSuccess)
                {
                    return StatusCode(StatusCodes.Status201Created, new { message = "Booking created" });
                }
            }
            catch (Exception ex)
            {
                if (ex.Message.Contains("DUPLICATED"))
                {
                    return new BadRequestObjectResult(new { message = "Error Booking alreaedy exist !" });
                }
            }

            return Conflict();
        }
    }
}
