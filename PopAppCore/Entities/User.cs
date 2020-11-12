using PopAppCore.Enums;
using System.ComponentModel.DataAnnotations;

namespace PopApp.Core.Entities
{
    public class User
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
