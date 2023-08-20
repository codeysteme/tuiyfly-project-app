using System.Collections.Generic;
using System.Linq;
using TuiFly.FlySearchApi.Api.Controllers.Airports.Models;
using TuiFly.FlySearchApi.Api.Controllers.Fligths.Model.Requests;
using TuiFly.FlySearchApi.Api.Controllers.Fligths.Model.Responses;
using TuiFly.FlySearchApi.Domain.Common;
using TuiFly.FlySearchApi.Domain.Models.Dto;
using TuiFly.FlySearchApi.Domain.Models.Queries;

namespace TuiFly.FlySearchApi.Api.Common.Helpers
{
    public static class ApiBuilder
    {
        /// <summary>
        /// build an airports list of data response
        /// </summary>
        /// <param name="airportDtos"></param>
        /// <returns></returns>
        public static IEnumerable<AirportsResponse> ToAirportModels(this IEnumerable<AirportDto> airportDtos)
        {
            return airportDtos.Select(a => a.ToAirportModel()).ToList();
        }

        /// <summary>
        /// build an airports response
        /// </summary>
        /// <param name="airportDto"></param>
        /// <returns></returns>
        public static AirportsResponse ToAirportModel(this AirportDto airportDto)
        {
            return new AirportsResponse
            {
                Available = airportDto.Available,
                CountryName = airportDto.CountryName,
                Id = airportDto.Id,
                Name = airportDto.Name
            };
        }

        public static FlightPackageResponse ToflightsListResponse(this PaginationModel<FlightPackageDto> flightPackageDtos)
        {
            return new FlightPackageResponse
            {
                PageIndex = flightPackageDtos.PageIndex,
                TotalPages = flightPackageDtos.TotalPages,
                Flights = flightPackageDtos.Items.Select(x => x.ToFlightPackageModel()).ToList()
            };
        }

        /// <summary>
        /// Build a single FlightPackageModel
        /// </summary>
        /// <param name="flight"></param>
        /// <returns></returns>
        private static FlightPackageModel ToFlightPackageModel(this FlightPackageDto flight)
        {
            return new FlightPackageModel
            {
                Id = flight.Id,
                Depature = ToFlightModel(flight.Depature),
                Arrival = ToFlightModel(flight.Arrival),
                TotalPrice = flight.TotalPrice.ToFormatedPrice()
            };

            static FlightModel ToFlightModel(FlightDto flight)
            {
                return new FlightModel
                {
                    DepartureDate = flight.DepartureDate,
                    ArrivalDate = flight.ArrivalDate,
                    Logo = flight.Logo,
                    Price = flight.Price.ToFormatedPrice(),
                    DepartureAirport = flight.DepartureAirport.ToAirportModel(),
                    ArrivalAirport = flight.ArrivalAirport.ToAirportModel()
                };
            }
        }

        /// <summary>
        /// Format price with default currecy
        /// </summary>
        /// <param name="price"></param>
        /// <returns></returns>
        private static string ToFormatedPrice(this decimal price) => $"{price} €";

        /// <summary>
        /// Build flight request query
        /// </summary>
        /// <param name="flightsRequest">Api flight request</param>
        /// <param name="paginationRequest">flight pagination model</param>
        /// <returns></returns>
        public static FlightsRequestQuery ToFlightsRequestQuery(this GetFlightsRequest flightsRequest, PaginationRequest paginationRequest)
        {
            return new FlightsRequestQuery
            {
                Arrival = flightsRequest.Arrival,
                Departure = flightsRequest.Departure,
                ReturnDate = flightsRequest.ReturnDate,
                DepartureDate = flightsRequest.DepartureDate,
                PassengerNumbers = flightsRequest.PassengerNumbers,
                PageIndex = paginationRequest.PageIndex,
                PageSize = paginationRequest.PageSize
            };
        }
    }
}
