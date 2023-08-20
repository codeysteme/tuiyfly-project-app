using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using TuiFly.FlySearchApi.Domain.Common.configuration;

namespace TuiFly.FlySearchApi.Api.Extensions
{
    /// <summary>
    /// Config cache app
    /// </summary>
    public static class CacheConfigurations
    {
        /// <summary>
        /// config and init cache module
        /// </summary>
        /// <param name="services"></param>
        /// <param name="configuration"></param>
        /// <returns></returns>
        public static IServiceCollection AddCacheConfiguration(this IServiceCollection services, IConfiguration configuration)
        {
            services.Configure<CacheConfiguration>(configuration.GetSection(nameof(CacheConfiguration)));
            var optimization = configuration.GetSection(nameof(CacheConfiguration)).Get<CacheConfiguration>();
            services.AddMemoryCache(options =>
            {
                options.CompactionPercentage = optimization?.CompactionPercentage ?? 0;
                options.SizeLimit = optimization?.SizeLimit ?? 0;
            });

            return services;
        }
    }
}
