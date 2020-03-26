using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SD_Project.Model;
using SD_Project.Models.Storage;

namespace SD_Project.Controllers
{
    public class AdsController: ControllerBase
    {
        private readonly OlxDatabaseContext _context;

        public AdsController(OlxDatabaseContext context)
        {
            _context = context;
        }
        
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Ad>>> GetAd()
        {
            return await _context.Ads.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Ad>> GetAd(int id)
        {
            var ad = await _context.Ads.FindAsync(id);
            if (ad == null)
            {
                return NotFound();
            }

            return ad;
        }

        
        [HttpPost]
        public async Task<ActionResult<Ad>> PostAd(Ad ad)
        {
            _context.Ads.Add(ad);
            await _context.SaveChangesAsync();

            return CreatedAtAction("", new {id = ad.Id}, ad);
        }
        

        [HttpPut("{id}")]
        public async Task<IActionResult> PutAd(int id, Ad ad)
        {
            if (id != ad.Id)
                return BadRequest();

            _context.Entry(ad).State = EntityState.Modified;

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
        public async Task<ActionResult<Ad>> DeleteAd(int id)
        {
            var ad = await _context.Ads.FindAsync(id);
           
            if (ad == null)
            {
                return NotFound();
            }
            _context.Entry(ad).State = EntityState.Deleted;
            
            _context.Ads.Remove(ad);
            await _context.SaveChangesAsync();

            return ad;
        }
    
    }
}