using System.Threading.Tasks;
using MemorizeHelper.API.Helpers;
using MemorizeHelper.API.Models;

namespace MemorizeHelper.API.Data
{
    public interface IMemorizeHelperRepository
    {
        Task<User> GetUser(int id);
        
        Task<CounterUnit> GetCounterUnitByMemorizeUnitId(int id);

        Task<MemorizeUnit> GetMemorizeUnitNoTracking(int id);
        Task<PagedList<MemorizeUnit>> GetMemorizeUnits(MemorizeUnitParams memorizeUnitParams);

        void Add<T>(T entity) where T: class;

        void Delete<T>(T entity) where T: class;

        Task<bool> SaveAll();
    } 

}