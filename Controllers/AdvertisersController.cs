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
    public class AdvertisersController : ControllerBase
    {
        private readonly OlxDatabaseContext _context;

        public AdvertisersController(OlxDatabaseContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Advertiser>>> GetAdvertiser()
        {
            return await _context.Advertisers.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Advertiser>> GetAdvertiser(int id)
        {
            var advertiser = await _context.Advertisers.FindAsync(id);
            if (advertiser == null)
            {
                return NotFound();
            }

            return advertiser;
        }


        [HttpPost]
        public async Task<ActionResult<Advertiser>> PostAdvertiser(Advertiser advertiser)
        {
            _context.Advertisers.Add(advertiser);
            await _context.SaveChangesAsync();

            return CreatedAtAction("", new {id = advertiser.Id}, advertiser);
        }


        [HttpPut("{id}")]
        public async Task<IActionResult> PutAdvertiser(int id, Advertiser advertiser)
        {
            if (id != advertiser.Id)
                return BadRequest();

            _context.Entry(advertiser).State = EntityState.Modified;

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
        public async Task<ActionResult<Advertiser>> DeleteAdvertiser(int id)
        {
            var advertiser = await _context.Advertisers.FindAsync(id);

            if (advertiser == null)
            {
                return NotFound();
            }

            _context.Entry(advertiser).State = EntityState.Deleted;
            
            _context.Advertisers.Remove(advertiser);
            await _context.SaveChangesAsync();

            return advertiser;
        }
    }
}