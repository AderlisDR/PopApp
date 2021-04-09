using Boundaries.Persistence.Data;
using Core.Entities;
using Core.Interfaces.Services;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace Boundaries.Persistence.Services
{
    public class AuthenticationServices : IAuthenticationServices
    {
        private readonly PopAppContext _context;
        public AuthenticationServices(PopAppContext context)
        {
            _context = context;
        }
        public async Task<User> LoginUser(string username, string password)
        {
            var user = await _context.Users.FirstOrDefaultAsync(opt => opt.UserName == username);
            if (user == null)
            {
                return null;
            }

            if (!VerifyPassword(password, user.PasswordHash, user.PasswordSalt))
            {
                return null;
            }
            return user;
        }

        public async Task<bool> UserExits(string username)
        {
            if (await _context.Users.AnyAsync(opt => opt.UserName == username))
            {
                return true;
            }
            return false;
        }

        private bool VerifyPassword(string password, byte[] passwordHash, byte[] passwordSalt)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512(passwordSalt))
            {
                var computedPasswordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                for (int i = 0; i < computedPasswordHash.Length; i++)
                {
                    if (computedPasswordHash[i] != passwordHash[i])
                    {
                        return false;
                    }
                }
                return true;
            }
        }
    }
}
