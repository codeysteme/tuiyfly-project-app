using FluentValidation;
using FluentValidation.AspNetCore;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Net.Http.Headers;
using TuiFly.BookingApi.Api.Common.Middlewares;
using TuiFly.BookingApi.Api.Controllers.Fligths.Validations;
using TuiFly.BookingApi.Api.Extensions;
using TuiFly.BookingApi.Infrastructure.SQLiteDb;

namespace TuiFly.BookingApi.Api
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
            services.AddValidatorsFromAssemblyContaining<SaveBookingValidator>();
            services.AddFluentValidationAutoValidation();
            services.AddDbContext<DataContext>(options => options.UseSqlite(Configuration.GetConnectionString("WebApiDatabase")));
            //D.I
            services.AddAppServices();
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
            }

            app.UseCors(AllowedSpecificOrigins);
            app.UseSwagger();
            app.UseSwaggerUI();
            app.UseHttpsRedirection();
            app.UseRouting();
            app.UseAuthorization();
            //Global server error handle middleware
            app.UseServerErrorHandler();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}