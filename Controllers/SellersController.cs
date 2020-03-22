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
    public class SellersController : ControllerBase
    {
        private readonly OlxDatabaseContext _context;

        public SellersController(OlxDatabaseContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Seller>>> GetSeller()
        {
            return await _context.Sellers.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Seller>> GetSeller(int id)
        {
            var seller = await _context.Sellers.FindAsync(id);
            if (seller == null)
            {
                return NotFound();
            }

            return seller;
        }


        [HttpPost]
        public async Task<ActionResult<Seller>> PostSeller(Seller seller)
        {
            _context.Sellers.Add(seller);
            await _context.SaveChangesAsync();

            return CreatedAtAction("", new {id = seller.Id}, seller);
        }


        [HttpPut("{id}")]
        public async Task<IActionResult> PutSeller(int id, Seller seller)
        {
            if (id != seller.Id)
                return BadRequest();

            _context.Entry(seller).State = EntityState.Modified;

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
        public async Task<ActionResult<Seller>> DeleteSeller(int id)
        {
            var seller = await _context.Sellers.FindAsync(id);

            if (seller == null)
            {
                return NotFound();
            }

            _context.Entry(seller).State = EntityState.Deleted;
            
            _context.Sellers.Remove(seller);
            await _context.SaveChangesAsync();

            return seller;
        }
    }
}