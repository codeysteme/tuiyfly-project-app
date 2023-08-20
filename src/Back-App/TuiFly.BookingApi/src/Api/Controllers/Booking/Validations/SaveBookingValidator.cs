using FluentValidation;
using TuiFly.BookingApi.Api.Controllers.Booking.Model.Requests;

namespace TuiFly.BookingApi.Api.Controllers.Fligths.Validations
{
    /// <summary>
    /// Custom class for validate the save request query
    /// </summary>
    public class SaveBookingValidator : AbstractValidator<SaveBookingRequest>
    {
        public SaveBookingValidator()
        {
            RuleFor(m => m.UserName)
                .NotNull()
                .NotEmpty()
                .MinimumLength(3)
                .WithMessage("The value '{PropertyValue}' provided for field '{PropertyName}' is invalid.");

            RuleFor(m => m.Email)
                .NotNull()
                .NotEmpty()
                .EmailAddress()
                .WithMessage("The value '{PropertyValue}' provided for field '{PropertyName}' is invalid.");

            RuleFor(m => m.Phone)
                .NotNull()
                .NotEmpty()
                .MinimumLength(10)
                .WithMessage("The value '{PropertyValue}' provided for field '{PropertyName}' is invalid.");


            RuleFor(m => m.FlightId)
                .NotNull()
                .NotEmpty()
                .Length(7)
                .WithMessage("The value '{PropertyValue}' provided for field '{PropertyName}' is invalid.");
        }
    }
}
