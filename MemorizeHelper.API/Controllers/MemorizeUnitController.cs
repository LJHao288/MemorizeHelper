using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MemorizeHelper.API.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MemorizeHelper.API.Migrations;

namespace MemorizeHelper.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class MemorizeUnitController : ControllerBase
    {
        private readonly DataContext _context;

        public MemorizeUnitController(DataContext context)
        {
            _context = context;
        }

        // Add memory unit for the first time
        [AllowAnonymous]
        [HttpPost]
        public void Post([FromBody] Models.MemorizeUnit Record)
        {
            try
            {
                Record.CreationDate = DateTime.Now;

                _context.MemorizeUnits.Add(Record);

                _context.SaveChanges();
            }

            catch (DbUpdateException)
            {
                throw;
            }
        }

        // Returns all memory units for a user
        [AllowAnonymous]
        [HttpGet("{username}")]
        [ActionName("GetForUser")]
        public async Task<IActionResult> Get(string username)
        {
            var Record = _context.MemorizeUnits.Where(x => x.OwnerUsername == username).ToList();
            return Ok(Record);
        }

        // Returns a single memory unit
        //[AllowAnonymous]
        //[HttpGet("{id}")]
        //[ActionName("GetSingleUnit")]
        //public async Task<IActionResult> GetSingleUnit(int id)
        //{
        //    var Record = await _context.MemorizeUnits.FirstOrDefaultAsync(x => x.Id == id);
        //    return Ok(Record);
        //}

        //Edit MemoryUnit
        [HttpPut("{NewRec}")]
        public void Put([FromBody] Models.MemorizeUnit NewRec)
        {
            try
            {
                _context.MemorizeUnits.Attach(NewRec);
                _context.Entry(NewRec).State = EntityState.Modified;
                _context.SaveChanges();
            }
            catch (DbUpdateException)
            {

            }
        }

        // Delete Unit
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            Models.MemorizeUnit contact = _context.MemorizeUnits.Find(id);
            if (contact == null) { }
            else
            {
                _context.MemorizeUnits.Remove(contact);
                _context.SaveChanges();
            }
        }




        [AllowAnonymous]
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var All = await _context.MemorizeUnits.ToListAsync();
            return Ok(All);
        }


        


        

        


        

    }
}
