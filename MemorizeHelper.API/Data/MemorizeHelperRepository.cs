using System.Linq;
using System.Threading.Tasks;
using MemorizeHelper.API.Helpers;
using MemorizeHelper.API.Models;
using Microsoft.EntityFrameworkCore;

namespace MemorizeHelper.API.Data
{
    public class MemorizeHelperRepository : IMemorizeHelperRepository
    {
        private readonly DataContext _context;
        public MemorizeHelperRepository(DataContext context)
        {
            _context = context;
        }
        public async Task<User> GetUser(int id)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Id == id);

            return user;
        }
        public async Task<PagedList<MemorizeUnit>> GetMemorizeUnits(MemorizeUnitParams memorizeUnitParams)
        {
            var MemorizeUnits = _context.MemorizeUnits.AsQueryable();
            //has username then return user Memorize Units, If not return all public Memorize Units
            if(!string.IsNullOrEmpty(memorizeUnitParams.Username)){
                MemorizeUnits = MemorizeUnits.Where(x=> x.OwnerUsername==memorizeUnitParams.Username);
            }else{
                MemorizeUnits = MemorizeUnits.Where(x=> x.IsPrivate==false);
            }

            if(!string.IsNullOrEmpty(memorizeUnitParams.SubjectNameSearch)){
                MemorizeUnits = MemorizeUnits.Where(x=> x.SubjectName.Contains(memorizeUnitParams.SubjectNameSearch));
            }
            if(!string.IsNullOrEmpty(memorizeUnitParams.TitleSearch)){
                MemorizeUnits = MemorizeUnits.Where(x=> x.Title.Contains(memorizeUnitParams.TitleSearch));
            }
            if(!string.IsNullOrEmpty(memorizeUnitParams.TagsSearch)){
                MemorizeUnits = MemorizeUnits.Where(x=> x.Tags.Contains(memorizeUnitParams.TagsSearch));
            }

            return await PagedList<MemorizeUnit>.CreateAsync(MemorizeUnits,memorizeUnitParams.PageNumber,memorizeUnitParams.PageSize);
        }

    }
}