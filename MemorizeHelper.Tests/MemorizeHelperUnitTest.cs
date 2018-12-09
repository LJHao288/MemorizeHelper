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



        [Fact]
        public async void Get()
        {
            //Arrange

            //Act

            //Assert
        }

        [Fact]
        public async void GetSchedule()
        {
            //Arrange

            //Act

            //Assert
        }


        [Fact]
        public async void GetPopular()
        {
            //Arrange

            //Act

            //Assert
        }

        [Fact]
        public async void GetAllPublic()
        {
            //Arrange

            //Act

            //Assert
        }

        [Fact]
        public async void GetForUserInPage()
        {
            //Arrange

            //Act

            //Assert
        }
        [Fact]
        public async void GetReviewTaskToday()
        {
            //Arrange

            //Act

            //Assert
        }
        [Fact]
        public async void Copy()
        {
            //Arrange

            //Act

            //Assert
        }
    }
}
