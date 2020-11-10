using PopApp.Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace PopApp.Core.Interfaces.Services
{
    public interface IUserServices
    {
        Task<IEnumerable<User>> GetUsers();
        Task<User> GetUser(int id);
        Task CreateUser(User user, string password);
        Task UpdateUser(int id, User user);
        Task DeleteUser(int id);
    }
}
