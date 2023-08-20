namespace TuiFly.FlySearchApi.Domain.Common.configuration
{
    /// <summary>
    /// CacheConfiguration
    /// </summary>
    public class CacheConfiguration
    {
        /// <summary>
        /// SizeLimit
        /// </summary>
        public int SizeLimit { get; set; }

        /// <summary>
        /// CompactionPercentage
        /// </summary>
        public double CompactionPercentage { get; set; }

        /// <summary>
        /// RefreshDelayInHours
        /// </summary>
        public int RefreshDelayInHours { get; set; }

        /// <summary>
        /// RestrictedValuesCacheExpirationInHours
        /// </summary>
        public int RestrictedValuesCacheExpirationInHours { get; set; }
    }
}
