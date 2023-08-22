using FluentValidation;
using System;
using TuiFly.FlySearchApi.Api.Controllers.Fligths.Model.Requests;

namespace TuiFly.FlySearchApi.Api.Controllers.Fligths.Validations
{
    /// <summary>
    /// Custom class for validate flight request query
    /// </summary>
    public class FlightRequestValidator : AbstractValidator<GetFlightsRequest>
    {
        public FlightRequestValidator()
        {
            RuleFor(m => m.Departure)
                .NotNull()
                .NotEmpty()
                .MinimumLength(3)
                .WithMessage("The value '{PropertyValue}' provided for field '{PropertyName}' is invalid.");

            RuleFor(m => m.Arrival)
                .NotNull()
                .NotEmpty()
                .MinimumLength(3)
                .WithMessage("The value '{PropertyValue}' provided for field '{PropertyName}' is invalid.");

            RuleFor(m => m)
                .Must(m => !m.Departure.Equals(m.Arrival, System.StringComparison.Ordinal))
                .WithMessage("The value provided for Departure or arrival is invalid.");

            RuleFor(m => m.DepartureDate)
                .NotNull()
                .NotEmpty()
                .WithMessage("The value '{PropertyValue}' provided for field '{PropertyName}' is invalid.");

            RuleFor(m => m.ReturnDate)
                .NotNull()
                .NotEmpty()
                .WithMessage("The value '{PropertyValue}' provided for field '{PropertyName}' is invalid.");

            RuleFor(m => m)
                .Must(m => m.DepartureDate.Date.CompareTo(m.ReturnDate.Date) <= 0 && m.DepartureDate.Date.CompareTo(DateTime.Now.AddDays(-1)) > 0)
                .WithMessage("The value provided for DepartureDate must be greater than arrivalDate.");
        }
    }
}
