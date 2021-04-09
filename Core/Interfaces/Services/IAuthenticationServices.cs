using Core.Entities;
using System.Threading.Tasks;

namespace Core.Interfaces.Services
{
    public interface IAuthenticationServices
    {
        Task<User> LoginUser(string username, string password);
        Task<bool> UserExits(string username);
    }
}
