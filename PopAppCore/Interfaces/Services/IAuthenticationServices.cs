using PopAppCore.Entities;
using System.Threading.Tasks;

namespace PopAppCore.Interfaces.Services
{
    public interface IAuthenticationServices
    {
        Task<User> LoginUser(string username, string password);
        Task<bool> UserExits(string username);
    }
}
