using Microsoft.EntityFrameworkCore;
using PopApp.Structure.Data;
using PopAppCore.Entities;
using PopAppCore.Interfaces.Services;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace PopApp.Structure.Services
{
    public class UserServices : IUserServices
    {
        private readonly PopAppContext _context;
        public UserServices(PopAppContext context)
        {
            _context = context;
        }
        public async Task CreateUser(User user, string password)
        {
            byte[] passwordHash, passwordSalt;
            GeneratePassword(password, out passwordHash, out passwordSalt);
            user.PasswordHash = passwordHash;
            user.PasswordSalt = passwordSalt;
            _context.Add(user);
            await _context.SaveChangesAsync();
        }

        private void GeneratePassword(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }

        public async Task DeleteUser(int id)
        {
            var user = await GetUser(id);
            if (user != null)
            {
                user.IsActive = false;
                _context.Update(user);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<User> GetUser(int id)
        {
            var user = await _context.Users.FirstOrDefaultAsync(opt => opt.UserId == id);
            return user;
        }

        public async Task<IEnumerable<User>> GetUsers()
        {
            var user = await _context.Users.ToListAsync();
            return user;
        }

        public async Task UpdateUser(int id, User user)
        {
            var updateUser = await GetUser(id);
            if (user != null)
            {
                updateUser.UserName = user.UserName;
                updateUser.Email = user.Email;
                updateUser.PasswordHash = user.PasswordHash;
                updateUser.PasswordSalt = user.PasswordSalt;
                updateUser.UserRole = user.UserRole;
                updateUser.IsActive = true;
                _context.Update(updateUser);
                await _context.SaveChangesAsync();
            }
        }
    }
}
