using FluentValidation;
using FluentValidation.AspNetCore;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Net.Http.Headers;
using TuiFly.FlySearchApi.Api.Common.Middlewares;
using TuiFly.FlySearchApi.Api.Controllers.Fligths.Validations;
using TuiFly.FlySearchApi.Api.Extensions;

namespace TuiFly.FlySearchApi.Api
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        private const string AllowedSpecificOrigins = "AllowedSpecificOrigins";

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();
            services.AddTuiflySwaggerGen();
            services.AddValidatorsFromAssemblyContaining<FlightRequestValidator>();
            services.AddFluentValidationAutoValidation();
            //D.I
            services.AddAppServices();
            //Cache init
            services.AddCacheConfiguration(Configuration);
            //enable cors policy
            services.AddCors(options => options.AddPolicy(name: AllowedSpecificOrigins,
                policy =>
                {
                    policy.WithOrigins("http://localhost:3000", "http://localhost:5088")
                    .WithHeaders(HeaderNames.ContentType, HeaderNames.AccessControlAllowOrigin, HeaderNames.Accept);
                }));
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseCors(AllowedSpecificOrigins);
            app.UseHttpsRedirection();
            app.UseRouting();
            app.UseAuthorization();
            //Global server error handle middleware
            app.UseServerErrorHandler();
            app.UseStaticFiles();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
