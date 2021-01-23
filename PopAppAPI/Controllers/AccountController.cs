using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using PopAppCore.Entities;
using PopAppCore.Interfaces.Services;
using PopAppData.Models.Account;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace PopAppAPI.Controllers
{
    /// <summary>
    /// Represents a controller for account related processes.
    /// </summary>
    [Route("api/accounts")]
    [ApiController]
    public sealed class AccountController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IAuthenticationServices _authenticationServices;

        /// <summary>
        /// Initializes a new instance of <see cref="AccountController"/>.
        /// </summary>
        /// <param name="configuration">An implementation of <see cref="IConfiguration"/>.</param>
        /// <param name="authenticationServices">An implementation of <see cref="IAuthenticationServices"/>.</param>
        public AccountController(IConfiguration configuration, IAuthenticationServices authenticationServices)
        {
            _configuration = configuration;
            _authenticationServices = authenticationServices;
        }

        [AllowAnonymous]
        [HttpPost]
        public async Task<ActionResult> Login([FromBody]LoginRequest request)
        {
            try
            {
                if (string.IsNullOrWhiteSpace(request.Username) || string.IsNullOrWhiteSpace(request.Password))
                {
                    throw new Exception("Las credenciales introducidas son inválidas");
                }

                User foundUser = await _authenticationServices.LoginUser(request.Username, request.Password);

                if (foundUser == null)
                {
                    throw new Exception("Su nombre de usuario y/o contraseña son incorrectos.");
                }

                if (!foundUser.IsActive)
                {
                    throw new Exception("Su cuenta se encuentra inactiva, póngase en contacto con su administrador.");
                }

                string token = BuildToken(foundUser);

                return Ok(new { token = token });
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        private string BuildToken(User user)
        {
            var claims = new[]
            {
                new Claim("userId", user.UserId.ToString(), ClaimValueTypes.Integer64),
                new Claim("username", user.UserName, ClaimValueTypes.String),
                new Claim("email", user.Email, ClaimValueTypes.String),
                new Claim("userRole", $"{(int)user.UserRole}", ClaimValueTypes.Integer32)
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));
            var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var token = new JwtSecurityToken(_configuration["Jwt:Issuer"], _configuration["Jwt:Issuer"], claims, expires: DateTime.Now.AddMinutes(60), signingCredentials: credentials);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
