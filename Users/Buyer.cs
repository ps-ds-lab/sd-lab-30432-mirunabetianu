using System.Collections.Generic;
using SD_Project.Models.Storage;

namespace SD_Project.Models.Users
{
    public class Buyer
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        
    }
}