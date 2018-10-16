using System.Threading.Tasks;
using MemorizeHelper.API.Models;

namespace MemorizeHelper.API.Data
{
    public interface IAuthRepository
    {
         Task<User> Register(User user, string password);
         Task<User> Login(string username, string password);
         Task<bool> UserExists(string username);

    }
}