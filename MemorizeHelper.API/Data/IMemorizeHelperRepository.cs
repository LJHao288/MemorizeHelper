using System.Threading.Tasks;
using MemorizeHelper.API.Helpers;
using MemorizeHelper.API.Models;

namespace MemorizeHelper.API.Data
{
    public interface IMemorizeHelperRepository
    {
        Task<User> GetUser(int id);
        Task<PagedList<MemorizeUnit>> GetMemorizeUnits(MemorizeUnitParams memorizeUnitParams);
    } 

}