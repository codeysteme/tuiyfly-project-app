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
        /// <param name="flightsRequestQuery"></param>
        /// <param name="departure"></param>
        /// <param name="arrival"></param>
        /// <returns></returns>
        private IEnumerable<FlightPackageDto> GetFlightsInCacheOrGenerate(FlightsRequestQuery flightsRequestQuery, AirportDto departure, AirportDto arrival)
        {
            var cacheKey = $"{flightsRequestQuery.Departure}-{flightsRequestQuery.Arrival}";
            var cacheOptions = new MemoryCacheEntryOptions
            {
                Size = _cacheOptions.SizeLimit,
                AbsoluteExpirationRelativeToNow = TimeSpan.FromHours(_cacheOptions.RestrictedValuesCacheExpirationInHours)
            };

            return _memoryCache.GetOrCreate(cacheKey, entry =>
            {
                entry.SetOptions(cacheOptions);
                return GenerateflightsData(flightsRequestQuery, departure, arrival);
            });
        }

        #region private methods

        /// <summary>
        /// Generate flight data
        /// </summary>
        /// <param name="flightsRequestQuery"></param>
        /// <param name="departure"></param>
        /// <param name="arrival"></param>
        /// <returns></returns>
        private IEnumerable<FlightPackageDto> GenerateflightsData(FlightsRequestQuery flightsRequestQuery, AirportDto departure, AirportDto arrival)
        {
            DEFAULT_FLIGHT_PRICE = 0;
            var response = new List<FlightPackageDto>();
            for (int i = 1; i < 50; i++)
            {
                response.Add(BuildFlightPackage(flightsRequestQuery, departure, arrival, i));
            }
            return response;
        }

        /// <summary>
        /// Build a flight package response
        /// </summary>
        /// <param name="flightsRequestQuery">flight request query</param>
        /// <param name="departure">departure airport</param>
        /// <param name="arrival">arrival airport</param>
        /// <param name="i">index of flights</param>
        /// <returns></returns>
        private FlightPackageDto BuildFlightPackage(FlightsRequestQuery flightsRequestQuery, AirportDto departure, AirportDto arrival, int i)
        {
            var (priceDeparture, priceReturn) = GetflightsPrices();

            return new FlightPackageDto
            {
                Id = i,
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
                    DepartureDate = flightsRequestQuery.ReturnDate,
                    ArrivalDate = flightsRequestQuery.ReturnDate.AddMinutes(15),
                    Logo = Constants.RYANAIR_LOGO,
                    Price = priceReturn
                },
                TotalPrice = priceDeparture + priceReturn
            };
        }

        /// <summary>
        /// fix flighs price for each items
        /// </summary>
        /// <returns></returns>
        private (decimal priceDeparture, decimal priceReturn) GetflightsPrices()
        {
            DEFAULT_FLIGHT_PRICE += Constants.DEPARTURE_PRICE;
            var returnPrice = DEFAULT_FLIGHT_PRICE + Constants.RETURN_PRICE;

            return (DEFAULT_FLIGHT_PRICE, returnPrice);
        }
        #endregion
    }
}
