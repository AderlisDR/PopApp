using Core.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Core.Interfaces.Services
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
