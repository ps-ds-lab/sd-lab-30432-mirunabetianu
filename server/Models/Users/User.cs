using System.Collections.Generic;

namespace SD_Project.Models.Users
{
    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public int IsBuyer { get; set; }
        public int IsSeller { get; set; }
    }
}