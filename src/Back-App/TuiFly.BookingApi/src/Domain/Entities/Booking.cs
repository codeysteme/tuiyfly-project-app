using System.ComponentModel.DataAnnotations;

namespace TuiFly.BookingApi.Domain.Entities
{
    /// <summary>
    /// the user booking entitie
    /// </summary>
    public class Booking
    {
        [Key]
        public int Id { get; set; }

        [MinLength(3)]
        public string UserName { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [MinLength(10)]
        public string Phone { get; set; }

        public string BookingDate { get; set; }

        [Required]
        [StringLength(7)]
        public string FlightId { get; set; }
    }
}
