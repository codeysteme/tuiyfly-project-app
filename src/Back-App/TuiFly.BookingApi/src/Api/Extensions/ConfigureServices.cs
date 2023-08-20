using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using TuiFly.BookingApi.Domain.Interfaces;
using TuiFly.BookingApi.Domain.Services;
using TuiFly.BookingApi.Infrastructure.Repositories;
using TuiFly.BookingApi.Infrastructure.SQLiteDb;

namespace TuiFly.BookingApi.Api.Extensions
{
    /// <summary>
    /// Configrure and Inject all D.I of app
    /// </summary>
    public static class ConfigureServices
    {
        /// <summary>
        /// config D.I
        /// </summary>
        /// <param name="services"></param>
        /// <returns></returns>
        public static IServiceCollection AddAppServices(this IServiceCollection services)
        {
            services.AddScoped<IBookingsRepository, BookingsRepository>();
            services.AddScoped<IBookingsManagerService, BookingsManagerService>();
            services.AddScoped<DbContext, DataContext>();

            return services;
        }
    }
}
