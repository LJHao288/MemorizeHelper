using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MemorizeHelper.API.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MemorizeHelper.API.Migrations;
using MemorizeHelper.API.Helpers;
using System.Security.Claims;
using MemorizeHelper.API.Models;

namespace MemorizeHelper.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class MemorizeUnitController : ControllerBase
    {
        private readonly DataContext _context;
        private readonly IMemorizeHelperRepository _repo;
        public MemorizeUnitController(IMemorizeHelperRepository repo,DataContext context)
        {
            _context = context;
            _repo = repo;
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
        [AllowAnonymous]
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
        [AllowAnonymous]
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


        //get all public in pages
        [AllowAnonymous]
        [HttpGet("GetAllPublicInPage")]
        public async Task<IActionResult> GetAll([FromQuery] MemorizeUnitParams memorizeUnitParams)
        {
            //set IsGetTask para
            memorizeUnitParams.IsGetTaskToday=false;

            //get units
            var MemorizeUnits = await _repo.GetMemorizeUnits(memorizeUnitParams);
            //add paination header to response
            Response.AddPagination(MemorizeUnits.CurrentPage, MemorizeUnits.TotalPages, MemorizeUnits.PageSize,
                MemorizeUnits.TotalCount);
            return Ok(MemorizeUnits);
        }
        // Returns all memory units for a user, Get Username from token
        [AllowAnonymous]
        [HttpGet("GetForUserInPage")]
        public async Task<IActionResult> GetForUserInPage([FromQuery] MemorizeUnitParams memorizeUnitParams)
        {

            //set username para
            var currentUserId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);
            var userFromRepo = await _repo.GetUser(currentUserId);
            memorizeUnitParams.Username = userFromRepo.Username;

            //test
            //memorizeUnitParams.Username = "abdullah";

            //set IsGetTask para
            memorizeUnitParams.IsGetTaskToday=false;

            //get units
            var MemorizeUnits = await _repo.GetMemorizeUnits(memorizeUnitParams);
            //add pagination header to response
            Response.AddPagination(MemorizeUnits.CurrentPage, MemorizeUnits.TotalPages, MemorizeUnits.PageSize,
               MemorizeUnits.TotalCount);

            return Ok(MemorizeUnits);
        }

        
        //Get the unit should review today for a user
        [AllowAnonymous]
        [HttpGet("GetReviewTaskToday")]
        public async Task<IActionResult> GetReviewTaskToday([FromQuery] MemorizeUnitParams memorizeUnitParams)
        {
            //set username para
            var currentUserId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);
            var userFromRepo = await _repo.GetUser(currentUserId);
            memorizeUnitParams.Username = userFromRepo.Username;

            //test
            //memorizeUnitParams.Username = "abdullah";

            //set IsGetTask para
            memorizeUnitParams.IsGetTaskToday=true;
            
            //get units
            var MemorizeUnits = await _repo.GetMemorizeUnits(memorizeUnitParams);
  
            Response.AddPagination(MemorizeUnits.CurrentPage, MemorizeUnits.TotalPages, MemorizeUnits.PageSize,
                MemorizeUnits.TotalCount);
            return Ok(MemorizeUnits);
        }

        
        //Quick add, copy others Memorize Unit
        [AllowAnonymous]
        [HttpPost("Copy/{id}")]
        public async void Copy([FromQuery] int id)
        {

            //get the login user
            //var currentUserId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);
            //var userFromRepo = await _repo.GetUser(currentUserId);
            //var LoginUsername = userFromRepo.Username;

            //test
            var LoginUsername = "Li";

            //get the original Memorize unit
            var newMemorizeUnit = await _repo.GetMemorizeUnitNoTracking(id);
            var originalMemorizeUnitId = newMemorizeUnit.Id;

            //reset the property and save
            newMemorizeUnit.Id =0;
            newMemorizeUnit.OwnerUsername = LoginUsername;
            _repo.Add<MemorizeHelper.API.Models.MemorizeUnit>(newMemorizeUnit);
            

            //deal with counter
            MemorizeHelper.API.Models.CounterUnit counterUnit = _repo.GetCounterUnitByMemorizeUnitId(originalMemorizeUnitId).Result;
            if (counterUnit == null){
                var newCounterUnit = new MemorizeHelper.API.Models.CounterUnit{MemorizeUnitId=originalMemorizeUnitId,Count=1};
                _repo.Add<MemorizeHelper.API.Models.CounterUnit>(newCounterUnit);
            }else{
                counterUnit.Count +=1;

            }
            await _repo.SaveAll();
        }


        

    }
}
