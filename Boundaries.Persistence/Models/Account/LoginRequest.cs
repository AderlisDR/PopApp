namespace Boundaries.Persistence.Models.Account
{
    /// <summary>
    /// Represents a request to access the application.
    /// </summary>
    public sealed class LoginRequest
    {
        /// <summary>
        /// Indicates the username of the user trying to login
        /// </summary>
        public string Username { get; set; }

        /// <summary>
        /// Indicates the password of the user trying to login
        /// </summary>
        public string Password { get; set; }
    }
}
