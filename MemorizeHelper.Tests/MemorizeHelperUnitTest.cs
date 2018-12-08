using System;
using Xunit;
using MemorizeHelper.API;
using MemorizeHelper.API.Dtos;
using Moq;
using MemorizeHelper.API.Data;
using MemorizeHelper.API.Controllers;
using MemorizeHelper.API.Models;
using System.Threading.Tasks;

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

            //var controller = new AuthController(mockRepo.Object,null);
            //Act
            
            //Assert

        }

        [Fact]
        public async void Register()
        {

        }

        [Fact]
        public async void Post()
        {

        }

        [Fact]
        public async void Get()
        {

        }

        [Fact]
        public async void GetSchedule()
        {

        }

        [Fact]
        public async void Put()
        {

        }

        [Fact]
        public async void Delete()
        {

        }

        [Fact]
        public async void GetPopular()
        {

        }

        [Fact]
        public async void GetAllPublic()
        {

        }

        [Fact]
        public async void GetForUserInPage()
        {

        }
        [Fact]
        public async void GetReviewTaskToday()
        {

        }
        [Fact]
        public async void Copy()
        {

        }
    }
}
