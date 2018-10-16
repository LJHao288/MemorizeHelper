using System.ComponentModel.DataAnnotations;

namespace MemorizeHelper.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }
        [Required]
        [StringLength(8, MinimumLength = 4, ErrorMessage ="Password length must between 4 and 8")]
        public string Password { get; set; }

    }
}