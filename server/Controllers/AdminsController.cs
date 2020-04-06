using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SD_Project.Models.Users;
using SD_Project.server.Models;

namespace SD_Project.server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AdminsController : ControllerBase
    {
        private readonly OlxDatabaseContext _context;

        public AdminsController(OlxDatabaseContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Admin>>> GetAdmin()
        {
            return await _context.Admins.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Admin>> GetAdmin(int id)
        {
            var admin = await _context.Admins.FindAsync(id);
            if (admin == null)
            {
                return NotFound();
            }

            return admin;
        }

        
        [HttpPost]
        public async Task<ActionResult<Admin>> PostAdmin(Admin admin)
        {
            _context.Admins.Add(admin);
            await _context.SaveChangesAsync();

            return CreatedAtAction("", new {id = admin.Id}, admin);
        }
        

        [HttpPut("{id}")]
        public async Task<IActionResult> PutAdmin(int id, Admin admin)
        {
            if (id != admin.Id)
                return BadRequest();

            _context.Entry(admin).State = EntityState.Modified;

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
        public async Task<ActionResult<Admin>> DeleteAdmin(int id)
        {
            var admin = await _context.Admins.FindAsync(id);
           
            if (admin == null)
            {
                return NotFound();
            }
            _context.Entry(admin).State = EntityState.Deleted;
            
            _context.Admins.Remove(admin);
            await _context.SaveChangesAsync();

            return admin;
        }
    }
}