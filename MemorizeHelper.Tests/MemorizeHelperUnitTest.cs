using System;
using Xunit;
using MemorizeHelper.API;
using MemorizeHelper.API.Dtos;
using MemorizeHelper.API.Helpers;
using Moq;
using MemorizeHelper.API.Data;
using MemorizeHelper.API.Controllers;
using MemorizeHelper.API.Models;
using System.Threading.Tasks;
using Microsoft.Extensions.Options;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Collections.Generic;
using System.Linq;

namespace MemorizeHelper.Tests
{
    public class MemorizeHelperUnitTest
    {

        [Fact]
        public async void Login()
        {
            //Arrange
            var userForLoginDto = new UserForLoginDto{Username ="Li", Password="123456"};
            var userFromRepo = new User{ Username ="li"};
            var mockRepo = new Mock<IAuthRepository>();
            mockRepo.Setup(repo => repo.Login(userForLoginDto.Username,userForLoginDto.Password))
                .ReturnsAsync(userFromRepo);

            var mockRepo2 = new Mock<IAuthRepository>();
            mockRepo2.Setup(repo => repo.Login(userForLoginDto.Username,userForLoginDto.Password))
                .ReturnsAsync((User)null);


            var setting = new TokenSetting{TokenKey = "Random super secret key hahaha"};
            var options = new Mock<IOptions<TokenSetting>>();
            options.Setup(x=>x.Value).Returns(setting);

            var controller = new AuthController(mockRepo.Object,options.Object);
            var controller2 = new AuthController(mockRepo2.Object,options.Object);

            //Act
            var result = await controller.Login(userForLoginDto);
            var result2 = await controller2.Login(userForLoginDto);

            //Assert
            Assert.IsType<OkObjectResult>(result);
            Assert.IsType<UnauthorizedResult>(result2);
        }

        [Fact]
        public async void Register()
        {
            //repeat and success

            //Arrange
            var userForRegisterDto = new UserForRegisterDto{Username="Li",Password="123456"};
            var userToCreate = new User{Username="Li"};
            var mockRepo = new Mock<IAuthRepository>();
            mockRepo.Setup(repo => repo.UserExists(userForRegisterDto.Username))
                .ReturnsAsync(false);       

            var setting = new TokenSetting{TokenKey = "Random super secret key hahaha"};
            var options = new Mock<IOptions<TokenSetting>>();
            options.Setup(x=>x.Value).Returns(setting);

            var controller = new AuthController(mockRepo.Object,options.Object);
            //Act
            var result = await controller.Register(userForRegisterDto);

            //Assert
            Assert.IsType<StatusCodeResult>(result);
        }

        private List<MemorizeUnit> GetTestMemorizeUnit(){
            var MemorizeUnits = new List<MemorizeUnit>();
            MemorizeUnits.Add(new MemorizeUnit(){
                Id=1,
                OwnerUsername ="li",
                Title="Verify rule",
                StringContent = "abc",
                SubjectName = "Program",
                IsPrivate = false,
                CreationDate = new DateTime(2018,11,15,11,0,0),
                Priority = "1",
                Tags = "T"

            });

            MemorizeUnits.Add(new MemorizeUnit(){
                Id=1,
                OwnerUsername ="li",
                Title="rule",
                StringContent = "abc",
                SubjectName = "Program",
                IsPrivate = false,
                CreationDate = new DateTime(2018,11,15,11,0,0),
                Priority = "1",
                Tags = "T"

            });

            MemorizeUnits.Add(new MemorizeUnit(){
                Id=1,
                OwnerUsername ="li",
                Title="rule",
                StringContent = "abc",
                SubjectName = "Program",
                IsPrivate = false,
                CreationDate = new DateTime(2018,11,15,11,0,0),
                Priority = "1",
                Tags = "T"

            });

            MemorizeUnits.Add(new MemorizeUnit(){
                Id=1,
                OwnerUsername ="li",
                Title="VR",
                StringContent = "abc",
                SubjectName = "Program",
                IsPrivate = false,
                CreationDate = new DateTime(2018,11,15,11,0,0),
                Priority = "1",
                Tags = "T"

            });
            return MemorizeUnits;
        }

        [Fact]
        public async void GetPopular()
        {
            //Arrange
            var maxNum = 5;
            DataContext db = new DataContext();
            var mockRepo = new Mock<IMemorizeHelperRepository>();
            mockRepo.Setup(repo => repo.GetPopularMemorizeUnits(maxNum))
                .ReturnsAsync(GetTestMemorizeUnit());
            var controller = new MemorizeUnitController(mockRepo.Object,db);
            //Act
            var result = await controller.GetPopular(maxNum);
            //Assert
            var okResult = Assert.IsType<OkObjectResult>(result);
            var returnValue = Assert.IsType<List<MemorizeUnit>>(okResult.Value);
            var firstMemorizeUnit = returnValue.FirstOrDefault();
            Assert.Equal("Verify rule",firstMemorizeUnit.Title);
            Assert.Equal(4,returnValue.Count());
        }

        


        private PagedList<MemorizeUnit> GetTestPagedMemorizeUnit(){
            var pagedMemorizeUnit = new PagedList<MemorizeUnit>(GetTestMemorizeUnit().Take(2).ToList(),4,1,2);
            return pagedMemorizeUnit;
        }

        [Fact]
        public async void Copy()
        {
            //Arrange
            var MemorrizeUnitId = 2;
            var userName = "huang";
            DataContext db = new DataContext();
            var mockRepo = new Mock<IMemorizeHelperRepository>();
            mockRepo.Setup(repo => repo.GetUserByUsername(userName))
                .ReturnsAsync(new User{Username ="huang"});
            mockRepo.Setup(repo => repo.GetMemorizeUnitNoTracking(MemorrizeUnitId))
                .ReturnsAsync(GetTestMemorizeUnit().FirstOrDefault());
            mockRepo.Setup(repo => repo.GetCounterUnitByMemorizeUnitId(MemorrizeUnitId))
                .ReturnsAsync(new CounterUnit{Id=1, MemorizeUnitId=2,Count=4});
            mockRepo.Setup(repo => repo.SaveAll())
                .ReturnsAsync(true);
            var controller = new MemorizeUnitController(mockRepo.Object,db);
            //Act
            var result = await controller.Copy(2,"huang");
            //Assert
            Assert.IsType<OkResult>(result);
        }


    }
}
