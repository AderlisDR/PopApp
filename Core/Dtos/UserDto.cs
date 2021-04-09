using Core.Enums;

namespace Core.Dtos
{
    public sealed class UserDto
    {
        public int UserId { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
        public string PasswordHash { get; set; }
        public string PasswordSalt { get; set; }
        public UserRole UserRole { get; set; }
        public bool IsActive { get; set; }
    }
}
