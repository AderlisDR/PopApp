using Boundaries.Persistence.Data;
using Boundaries.Persistence.Services;
using Core.Interfaces.Services;
using Microsoft.AspNet.OData.Extensions;
using Microsoft.AspNet.OData.Formatter;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.ResponseCompression;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Tokens;
using Microsoft.Net.Http.Headers;
using Microsoft.OpenApi.Models;
using System;
using System.Collections.Generic;
using System.IO.Compression;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace PopApp
{
    /// <summary>
    /// Start up of web API
    /// </summary>
    public sealed class Startup
    {
        /// <summary>
        /// Getters of configuration implementation.
        /// </summary>
        public static IConfiguration Configuration { get; set; }

        /// <summary>
        /// Build the application in different environments
        /// </summary>
        /// <param name="configuration">An implementation of <see cref="IConfiguration"/></param>
        /// <param name="env">An implementation of <see cref="IWebHostEnvironment"/></param>
        public Startup(IConfiguration configuration, IWebHostEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true);

            Configuration = builder.Build();
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDistributedMemoryCache();
            services.AddResponseCompression();
            services.Configure<GzipCompressionProviderOptions>
                (options => { options.Level = CompressionLevel.Fastest; });
            services.AddOData();
            services.AddMvc(option =>
            {
                foreach (var formatter in option.OutputFormatters
                    .OfType<ODataOutputFormatter>()
                    .Where(item => !item.SupportedMediaTypes.Any()))
                {
                    formatter.SupportedMediaTypes.Add(
                        new MediaTypeHeaderValue("application/prs.mock-odata"));
                }
                foreach (var formatter in option.InputFormatters
                    .OfType<ODataInputFormatter>()
                    .Where(item => !item.SupportedMediaTypes.Any()))
                {
                    formatter.SupportedMediaTypes.Add(
                        new MediaTypeHeaderValue("application/prs.mock-odata"));
                }
            }).AddJsonOptions(options =>
            {
                options.JsonSerializerOptions.PropertyNamingPolicy = JsonNamingPolicy.CamelCase;
                options.JsonSerializerOptions.IgnoreNullValues = true;
            }).SetCompatibilityVersion(CompatibilityVersion.Latest);

            ConfigureDatabase(services);
            ConfigureSession(services);
            ConfigureAuth(services);
            ConfigureAutoMapper(services);
            ConfigureSwagger(services);
            ConfigureProjectServices(services);
            ConfigureCors(services);

            // In production, the Angular files will be served from this directory
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/dist";
            });
        }

        private static void ConfigureDatabase(IServiceCollection services)
        {
            services.AddDbContext<PopAppContext>(opt => opt.UseSqlServer(Configuration.GetConnectionString("DefaultConnection"), b => b.MigrationsAssembly("Boundaries.Persistence")));
        }

        private static void ConfigureSession(IServiceCollection services)
        {
            services.AddMemoryCache();

            services.AddSession(options =>
            {
                options.IdleTimeout = TimeSpan.FromSeconds(140);
                options.Cookie.HttpOnly = true;
                options.Cookie.IsEssential = true;
            });
        }

        private static void ConfigureAuth(IServiceCollection services)
        {
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(options =>
                {
                    options.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuer = true,
                        ValidateAudience = true,
                        ValidateLifetime = true,
                        ValidateIssuerSigningKey = true,
                        ValidIssuer = Configuration["Jwt:Issuer"],
                        ValidAudience = Configuration["Jwt:Issuer"],
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["Jwt:Key"]))
                    };
                    options.Events = new JwtBearerEvents
                    {
                        OnMessageReceived = context =>
                        {
                            var accessToken = context.Request.Query["access_token"];

                            // If the request is for our hub...
                            var path = context.HttpContext.Request.Path;
                            if (!string.IsNullOrEmpty(accessToken) &&
                                (path.StartsWithSegments("/hubs/notification-hub")))
                            {
                                // Read the token out of the query string
                                context.Token = accessToken;
                            }

                            return Task.CompletedTask;
                        }
                    };
                });
        }

        private static void ConfigureAutoMapper(IServiceCollection services)
        {
            services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
        }

        private static void ConfigureSwagger(IServiceCollection services)
        {
            services.AddSwaggerGen(options =>
            {
                string groupName = "v1";
                var securityScheme = new OpenApiSecurityScheme
                {
                    In = ParameterLocation.Header,
                    Description = "Please enter JWT with Bearer into field",
                    Name = "Authorization",
                    Type = SecuritySchemeType.ApiKey
                };

                options.SwaggerDoc(groupName, new OpenApiInfo
                {
                    Title = "PopApp API",
                    Version = groupName,
                    Description = "",
                    Contact = new OpenApiContact
                    {
                        Name = "Jorge David terrero",
                        Email = "jorgedavidterrero@gmail.com",
                        Url = new Uri("https://github.com/JorgeTerrero")
                    }
                });
                options.AddSecurityDefinition("Bearer", securityScheme);
                options.AddSecurityRequirement(new OpenApiSecurityRequirement
                {
                    { securityScheme, new List<string>() }
                });
            });
        }

        private static void ConfigureProjectServices(IServiceCollection services)
        {
            services.AddTransient<ICompanyServices, CompanyServices>();
            services.AddTransient<IContainerServices, ContainerServices>();
            services.AddTransient<IDocumentsServices, DocumentServices>();
            services.AddTransient<IFreigthServices, FreigthServices>();
            services.AddTransient<IProductServices, ProductServices>();
            services.AddTransient<IUserServices, UserServices>();
            services.AddTransient<IVesselServices, VesselServices>();
            services.AddScoped<IAuthenticationServices, AuthenticationServices>();
            services.AddTransient<ILoggerServices, LoggerServices>();
            services.AddTransient<IScheduleServices, ScheduleServices>();
            services.AddTransient<IChartServices, ChartServices>();
        }

        private static void ConfigureCors(IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddPolicy("PopAppPolicy",
                builder =>
                {
                    builder.AllowAnyMethod();
                });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseSwagger();
            app.UseSwaggerUI(c => { c.SwaggerEndpoint("/swagger/v1/swagger.json", "PopApp API V1"); });
            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseSpaStaticFiles();
            app.UseRouting();
            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller}/{action=Index}/{id?}");
            });

            app.UseSpa(spa =>
            {
                // To learn more about options for serving an Angular SPA from ASP.NET Core,
                // see https://go.microsoft.com/fwlink/?linkid=864501

                spa.Options.SourcePath = "ClientApp";

                if (env.IsDevelopment())
                {
                    spa.UseProxyToSpaDevelopmentServer("http://localhost:4200");
                }
            });

            app.UseCors("PopAppPolicy");
        }
    }
}
