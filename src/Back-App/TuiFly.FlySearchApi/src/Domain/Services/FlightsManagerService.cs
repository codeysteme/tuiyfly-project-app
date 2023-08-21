using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using TuiFly.FlySearchApi.Domain.Common;
using TuiFly.FlySearchApi.Domain.Common.configuration;
using TuiFly.FlySearchApi.Domain.Interfaces;
using TuiFly.FlySearchApi.Domain.Models.Dto;
using TuiFly.FlySearchApi.Domain.Models.Queries;

namespace TuiFly.FlySearchApi.Domain.Services
{
    public class FlightsManagerService : IFlightsManagerService
    {
        #region properties
        /// <summary>
        /// the airports repository services
        /// </summary>
        private readonly IAirportsRepositoryService _airportsRepository;
        /// <summary>
        /// The cache provider
        /// </summary>
        private readonly IMemoryCache _memoryCache;
        private readonly CacheConfiguration _cacheOptions;

        /// <summary>
        /// the default flight prices
        /// </summary>
        public int DEFAULT_FLIGHT_PRICE;
        #endregion


        /// <summary>
        /// the ctor
        /// </summary>
        /// <param name="airportsRepositoryService"></param>
        /// <param name="cache"></param>
        public FlightsManagerService(IAirportsRepositoryService airportsRepositoryService, IMemoryCache memoryCache,
            IOptions<CacheConfiguration> options)
        {
            _airportsRepository = airportsRepositoryService;
            _memoryCache = memoryCache;
            _cacheOptions = options.Value;
        }

        /// <summary>
        /// Get list of flights by user query
        /// </summary>
        /// <param name="flightsRequestQuery">the flight query</param>
        /// <returns></returns>
        public PaginationModel<FlightPackageDto> GetflightsList(FlightsRequestQuery flightsRequestQuery)
        {
            var airports = _airportsRepository.GetAirportList();
            var departure = airports.Where(x => x.Id.Equals(flightsRequestQuery.Departure)).FirstOrDefault();
            var arrival = airports.Where(x => x.Id.Equals(flightsRequestQuery.Arrival)).FirstOrDefault();

            if (departure != null && arrival != null)
            {
                var result = GetFlightsInCacheOrGenerate(flightsRequestQuery, departure, arrival);

                return result.ToPaginatedcollection(flightsRequestQuery.PageIndex, flightsRequestQuery.PageSize);
            }

            return default;
        }

        /// <summary>
        /// Get flights from app cache or generate by query data
        /// </summary>
        /// <param name="flightsQuery"></param>
        /// <param name="departure"></param>
        /// <param name="arrival"></param>
        /// <returns></returns>
        private IEnumerable<FlightPackageDto> GetFlightsInCacheOrGenerate(FlightsRequestQuery flightsQuery, AirportDto departure, AirportDto arrival)
        {
            var cacheKey = $"{flightsQuery.Departure}-{flightsQuery.Arrival}_{flightsQuery.PassengerNumbers}";
            var cacheOptions = new MemoryCacheEntryOptions
            {
                Size = _cacheOptions.SizeLimit,
                AbsoluteExpirationRelativeToNow = TimeSpan.FromHours(_cacheOptions.RestrictedValuesCacheExpirationInHours)
            };

            return _memoryCache.GetOrCreate(cacheKey, entry =>
            {
                entry.SetOptions(cacheOptions);
                return GenerateflightsData(flightsQuery, departure, arrival);
            });
        }

        #region private methods

        /// <summary>
        /// Generate flight data
        /// </summary>
        /// <param name="flightsQuery"></param>
        /// <param name="departure"></param>
        /// <param name="arrival"></param>
        /// <returns></returns>
        private IEnumerable<FlightPackageDto> GenerateflightsData(FlightsRequestQuery flightsQuery, AirportDto departure, AirportDto arrival)
        {
            DEFAULT_FLIGHT_PRICE = 0;
            var response = new List<FlightPackageDto>();
            for (int i = 0; i < 50; i++)
            {
                response.Add(BuildFlightPackage(flightsQuery, departure, arrival));
            }
            return response;
        }

        /// <summary>
        /// Build a flight package response
        /// </summary>
        /// <param name="flightsQuery">flight request query</param>
        /// <param name="departure">departure airport</param>
        /// <param name="arrival">arrival airport</param>
        /// <returns></returns>
        private FlightPackageDto BuildFlightPackage(FlightsRequestQuery flightsQuery, AirportDto departure, AirportDto arrival)
        {
            var (priceDeparture, priceReturn) = GetflightsPrices(flightsQuery.PassengerNumbers);

            return new FlightPackageDto
            {
                Depature = new FlightDto
                {
                    DepartureAirport = departure,
                    ArrivalAirport = arrival,
                    DepartureDate = DateTime.Now,
                    ArrivalDate = DateTime.Now.AddMinutes(15),
                    Logo = Constants.TUIFLY_LOGO,
                    Price = priceDeparture
                },
                Arrival = new FlightDto
                {
                    DepartureAirport = arrival,
                    ArrivalAirport = departure,
                    DepartureDate = flightsQuery.ReturnDate,
                    ArrivalDate = flightsQuery.ReturnDate.AddMinutes(15),
                    Logo = Constants.RYANAIR_LOGO,
                    Price = priceReturn
                },
                TotalPrice = priceDeparture + priceReturn
            };
        }

        /// <summary>
        /// fix flighs price for each items
        /// </summary>
        /// <param name="numberPassenger">number of passenger</param>
        /// <returns></returns>
        private (decimal priceDeparture, decimal priceReturn) GetflightsPrices(int numberPassenger)
        {
            DEFAULT_FLIGHT_PRICE += Constants.DEPARTURE_PRICE * numberPassenger;
            var returnPrice = DEFAULT_FLIGHT_PRICE + Constants.RETURN_PRICE * numberPassenger;

            return (DEFAULT_FLIGHT_PRICE, returnPrice);
        }
        #endregion
    }
}
