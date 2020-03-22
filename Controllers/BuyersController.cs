using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SD_Project.Models;
using SD_Project.Models.Users;

namespace SD_Project.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BuyersController: ControllerBase
    {
        private readonly OlxDatabaseContext _context;

        public BuyersController(OlxDatabaseContext context)
        {
            _context = context;
        }
        
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Buyer>>> GetBuyer()
        {
            return await _context.Buyers.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Buyer>> GetBuyer(int id)
        {
            var buyer = await _context.Buyers.FindAsync(id);
            if (buyer == null)
            {
                return NotFound();
            }

            return buyer;
        }

        
        [HttpPost]
        public async Task<ActionResult<Buyer>> PostBuyer(Buyer buyer)
        {
            _context.Buyers.Add(buyer);
            await _context.SaveChangesAsync();

            return CreatedAtAction("", new {id = buyer.Id}, buyer);
        }
        

        [HttpPut("{id}")]
        public async Task<IActionResult> PutBuyer(int id, Buyer buyer)
        {
            if (id != buyer.Id)
                return BadRequest();

            _context.Entry(buyer).State = EntityState.Modified;

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
        public async Task<ActionResult<Buyer>> DeleteBuyer(int id)
        {
            var buyer = await _context.Buyers.FindAsync(id);
           
            if (buyer == null)
            {
                return NotFound();
            }
            _context.Entry(buyer).State = EntityState.Deleted;
            
            _context.Buyers.Remove(buyer);
            await _context.SaveChangesAsync();

            return buyer;
        }
    }
}