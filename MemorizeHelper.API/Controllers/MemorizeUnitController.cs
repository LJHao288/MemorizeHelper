﻿using System;
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
using Microsoft.AspNetCore.Cors;
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
        public MemorizeUnitController(IMemorizeHelperRepository repo, DataContext context)
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


        [AllowAnonymous]
        [HttpGet("GetSchedule/{Id}")]
        public async Task<IActionResult> GetSchedule(int Id)
        {

            var Records = _context.Schedule.Where(x => x.Unit.Id == Id).ToList();

            return Ok(Records);
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
        public void Put(Models.MemorizeUnit NewRec)
        {
            try
            {

                List<Schedule> ToDel = _context.Schedule.Where(x => x.Unit.Id == NewRec.Id).ToList();

                _context.Schedule.RemoveRange(ToDel);

                _context.SaveChanges();


                _context.Schedule.AddRange(NewRec.Schedules);

                _context.MemorizeUnits.Attach(NewRec);
                _context.Entry(NewRec).State = EntityState.Modified;
                _context.SaveChanges();


            }
            catch (Exception e)
            {
            }

        }

        // Delete Unit
        [AllowAnonymous]
        [HttpDelete("{id}")]
        public string Delete(int id)
        {


            Models.MemorizeUnit Record;

            try
            {

                Record = _context.MemorizeUnits.Where(x => x.Id == id).ToList()[0];

                if (Record == null) { return null; }

                else
                {

                    _context.MemorizeUnits.Remove(Record);

                    _context.SaveChanges();

                }

            }

            catch (Exception e)
            {
                return e.InnerException.Message;
            }

            return Record.OwnerUsername;
        }

        //Get popular Memorize Units
        [AllowAnonymous]
        [HttpGet("GetPopular")]
        public async Task<IActionResult> GetPopular([FromQuery] int maxNum = 3)
        {
            //get units
            var MemorizeUnits = await _repo.GetPopularMemorizeUnits(maxNum);
            return Ok(MemorizeUnits);
        }



        //get all public in pages
        [AllowAnonymous]
        [HttpGet("GetAllPublicInPage")]
        public async Task<IActionResult> GetAllPublic([FromQuery] MemorizeUnitParams memorizeUnitParams)
        {
            //set IsGetTask para
            memorizeUnitParams.IsGetTaskToday = false;

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

            //get user name from para,check if user exist
            var userFromRepo = _repo.GetUserByUsername(memorizeUnitParams.Username);
            if (userFromRepo == null)
            {
                return Unauthorized();
            }


            //set IsGetTask para
            memorizeUnitParams.IsGetTaskToday = false;

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

            //get user name from para,check if user exist
            var userFromRepo = _repo.GetUserByUsername(memorizeUnitParams.Username);
            if (userFromRepo == null)
            {
                return Unauthorized();
            }

            //set IsGetTask para
            memorizeUnitParams.IsGetTaskToday = true;

            //get units
            var MemorizeUnits = await _repo.GetMemorizeUnits(memorizeUnitParams);

            Response.AddPagination(MemorizeUnits.CurrentPage, MemorizeUnits.TotalPages, MemorizeUnits.PageSize,
                MemorizeUnits.TotalCount);
            return Ok(MemorizeUnits);
        }


        //Quick add, copy others Memorize Unit
        [AllowAnonymous]
        [HttpPost("Copy/{id}/{userName}")]
        public async Task<IActionResult> Copy(int id, string userName)
        {


            //get user id from para,check if user exist
            var userFromRepo = _repo.GetUserByUsername(userName);
            if (userFromRepo == null)
            {
                return Unauthorized();
            }
            var LoginUsername = userFromRepo.Result.Username;


            //get the original Memorize unit
            var newMemorizeUnit = await _repo.GetMemorizeUnitNoTracking(id);
            var originalMemorizeUnitId = newMemorizeUnit.Id;
            if (newMemorizeUnit.IsPrivate == true)
            {
                return Unauthorized();
            }

            //reset the property and save
            newMemorizeUnit.Id = 0;
            newMemorizeUnit.OwnerUsername = LoginUsername;
            _repo.Add<MemorizeHelper.API.Models.MemorizeUnit>(newMemorizeUnit);



            MemorizeHelper.API.Models.CounterUnit counterUnit = _repo.GetCounterUnitByMemorizeUnitId(originalMemorizeUnitId).Result;
            if (counterUnit == null)
            {
                var newCounterUnit = new MemorizeHelper.API.Models.CounterUnit { MemorizeUnitId = originalMemorizeUnitId, Count = 1 };
                _repo.Add<MemorizeHelper.API.Models.CounterUnit>(newCounterUnit);
            }
            else
            {
                counterUnit.Count += 1;

            }

            if (await _repo.SaveAll())
            {
                return Ok();
            }
            return BadRequest("Could not copy");
        }

    }
}
