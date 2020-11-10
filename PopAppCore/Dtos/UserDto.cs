using System;
using System.Collections.Generic;
using System.Text;

namespace PopApp.Core.Dtos
{
    public class UserDto
    {
        public int UserId { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
        public string PasswordHash { get; set; }
        public string PasswordSalt { get; set; }
        public string UserRole { get; set; }
        public bool IsActive { get; set; }
    }
}
