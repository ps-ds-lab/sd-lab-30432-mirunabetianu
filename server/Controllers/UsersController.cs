using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using SD_Project.Models.Users;
using SD_Project.server.Models;

namespace SD_Project.server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController: ControllerBase
    {
        private readonly OlxDatabaseContext _context;

        public UsersController(OlxDatabaseContext context)
        {
            _context = context;
        }
        
        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetUser()
        {
            return await _context.Users.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetUser(int id)
        {
            var user = await _context.Users.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }

            return user;
        }

        
        [HttpPost]
        public async Task<ActionResult<User>> PostUser(User user)
        {
            user.Password = BCrypt.Net.BCrypt.HashPassword(user.Password);
            
            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return CreatedAtAction("", new {id = user.Id}, user);
        }
        

        [HttpPut("{id}")]
        public async Task<IActionResult> PutUser(int id, User user)
        {
            if (id != user.Id)
                return BadRequest();

            _context.Entry(user).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                return NotFound();
            }
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<User>> DeleteUser(int id)
        {
            var buyer = await _context.Users.FindAsync(id);
           
            if (buyer == null)
            {
                return NotFound();
            }
            _context.Entry(buyer).State = EntityState.Deleted;
            
            _context.Users.Remove(buyer);
            await _context.SaveChangesAsync();

            return buyer;
        }
        
    }
}