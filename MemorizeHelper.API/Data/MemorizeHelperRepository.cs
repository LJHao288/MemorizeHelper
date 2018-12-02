using System;
using System.Collections.Generic;
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

        public async Task<User> GetUserByUsername(string username)
        {
            var usernamelower =  username.ToLower();
            var user = await _context.Users.FirstOrDefaultAsync(x => x.Username ==usernamelower);
            return user;
        }

        public async Task<CounterUnit> GetCounterUnitByMemorizeUnitId(int id)
        {
            var counterUnit = await _context.CounterUnits.FirstOrDefaultAsync(u => u.MemorizeUnitId == id);

            return counterUnit;
        }

        public async Task<MemorizeUnit> GetMemorizeUnitNoTracking(int id)
        {
            var memorizeUnit = await _context.MemorizeUnits.AsNoTracking().FirstOrDefaultAsync(u => u.Id == id);

            return memorizeUnit;
        }

        public async Task<PagedList<MemorizeUnit>> GetMemorizeUnits(MemorizeUnitParams memorizeUnitParams)
        {
            var MemorizeUnits = _context.MemorizeUnits.AsQueryable();
            //has username then return user Memorize Units, If not return all public Memorize Units
            if(!string.IsNullOrEmpty(memorizeUnitParams.Username)){
                MemorizeUnits = MemorizeUnits.Where(x=> x.OwnerUsername==memorizeUnitParams.Username);
            }else{
                if(memorizeUnitParams.IsGetTaskToday){
                    return null;
                }else{
                    MemorizeUnits = MemorizeUnits.Where(x=> x.IsPrivate==false);
                }
                
            }

            if(memorizeUnitParams.IsGetTaskToday){
                //get review task today
                MemorizeUnits = MemorizeUnits.Where(x => x.Schedules.Any(y=>y.Date.Date==DateTime.Today.Date));

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

        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);        
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() >0;
        }

        public async Task<List<MemorizeUnit>> GetPopularMemorizeUnits(int maxNum)
        {
            var popularMemorizeUnitIdList =  await _context.CounterUnits.OrderByDescending(x=>x.Count).Take(maxNum).Select(x=> x.MemorizeUnitId).ToListAsync();
            var pupularMemorizeUnits = await _context.MemorizeUnits.Where(x => popularMemorizeUnitIdList.Contains(x.Id)).ToListAsync();
            return(pupularMemorizeUnits);
        }
    }
}