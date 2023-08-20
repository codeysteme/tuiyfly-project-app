using System.IO;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace TuiFly.FlySearchApi.Infrastructure.Mock.Tools
{
    /// <summary>
    /// A custom class for reading all static files
    /// </summary>
    internal class ReadFixtureFiles
    {
        /// <summary>
        /// Read file and get content as string 
        /// </summary>
        /// <param name="path">The path of static json file</param>
        /// <returns></returns>
        public static string Read(string path) => File.ReadAllText(CleanAndFormatPath(path));

        /// <summary>
        /// Read and deserialize json to model data
        /// </summary>
        /// <typeparam name="T">The taret class model</typeparam>
        /// <param name="path">The path of static json file</param>
        /// <returns></returns>
        public static TResponse ReadAndDeserialize<TResponse>(string path) where TResponse : class
        {
            var options = new JsonSerializerOptions
            {
                PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
                Converters = { new JsonStringEnumConverter() }
            };

            return JsonSerializer.Deserialize<TResponse>(Read($"../Infrastructure/{path}"), options);
        }

        /// <summary>
        /// Get clean and formated path adapt with project
        /// </summary>
        /// <param name="path">The path of static json file</param>
        /// <returns></returns>
        private static string CleanAndFormatPath(string path)
        {
            return string.Concat(path.Replace('/', Path.DirectorySeparatorChar), ".json");
        }
    }
}
