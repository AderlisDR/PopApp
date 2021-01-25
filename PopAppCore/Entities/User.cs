using PopAppCore.Enums;
using System.ComponentModel.DataAnnotations;

namespace PopAppCore.Entities
{
    public sealed class User
    {
        [Key]
        public int UserId { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public UserRole UserRole { get; set; }
        public bool IsActive { get; set; }
    }
}
