using Microsoft.AspNetCore.Mvc;
using TuiFly.BookingApi.Domain.Interfaces;

namespace TuiFly.BookingApi.Api.Controllers.Fligths
{
    /// <summary>
    /// BookingsController base
    /// </summary>
    [ApiController]
    [Route("api/[controller]")]
    public partial class BookingsController : ControllerBase
    {
        /// <summary>
        /// the booking flight service for manage all flight reservation
        /// </summary>
        private readonly IBookingsManagerService _bookingsManagerService;

        /// <summary>
        /// The ctor
        /// </summary>
        /// <param name="bookingsManagerService">the booking flight manager service</param>
        public BookingsController(IBookingsManagerService bookingsManagerService)
        {
            _bookingsManagerService = bookingsManagerService;
        }
    }
}
