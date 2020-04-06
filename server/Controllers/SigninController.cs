using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using SD_Project.Models.Users;
using SD_Project.server.Models;
using SD_Project.server.Models.Login;

namespace SD_Project.server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SigninController : ControllerBase
    {
        private readonly OlxDatabaseContext _context;

        public SigninController(OlxDatabaseContext context)
        {
            _context = context;
        }
        
        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetUser()
        {
            return await _context.Users.ToListAsync();
        }
        
        [HttpPost]
        public async Task<ActionResult<bool>> ValidateUser(Authentication authentication)
        {
            var existing = false;
            string password = null;
            var id = 0;
            foreach(var user in _context.Users)
            {
                if (!user.Username.Equals(authentication.Username)) continue;
                existing = true;
                password = user.Password;
                id = user.Id;
                break;
            }
            
            await _context.SaveChangesAsync();
            
            var response =  BCrypt.Net.BCrypt.Verify(authentication.Password, password);

            return !response || !existing ? (ActionResult<bool>) NotFound() : Ok(new {token = GenerateToken(id)});
        }
        
        public string GenerateToken(int userId)
        {
            var mySecret = "asdv234234^&%&^%&^hjsdfb2%%%";
            var mySecurityKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(mySecret));

            var myIssuer = "http://mysite.com";
            var myAudience = "http://myaudience.com";

            var tokenHandler = new JwtSecurityTokenHandler();
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.NameIdentifier, userId.ToString()),
                }),
                Expires = DateTime.UtcNow.AddDays(7),
                Issuer = myIssuer,
                Audience = myAudience,
                SigningCredentials = new SigningCredentials(mySecurityKey, SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
        
    }
}