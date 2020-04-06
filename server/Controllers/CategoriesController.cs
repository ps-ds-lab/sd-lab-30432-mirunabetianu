using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SD_Project.server.Models;
using SD_Project.server.Models.Storage;

namespace SD_Project.server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CategoriesController: ControllerBase
    {
        private readonly OlxDatabaseContext _context;

        public CategoriesController(OlxDatabaseContext context)
        {
            _context = context;
        }
        
        [EnableCors]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Category>>> GetCategory()
        {
            return await _context.Categories.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Category>> GetCategory(int id)
        {
            var category = await _context.Categories.FindAsync(id);
            if (category == null)
            {
                return NotFound();
            }

            return category;
        }

        
        [HttpPost]
        public async Task<ActionResult<Category>> PostCategory(Category category)
        {
            _context.Categories.Add(category);
            await _context.SaveChangesAsync();

            return CreatedAtAction("", new {id = category.Id}, category);
        }
        

        [HttpPut("{id}")]
        public async Task<IActionResult> PutCategory(int id, Category category)
        {
            if (id != category.Id)
                return BadRequest();

            _context.Entry(category).State = EntityState.Modified;

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
        public async Task<ActionResult<Category>> DeleteCategory(int id)
        {
            var category = await _context.Categories.FindAsync(id);
           
            if (category == null)
            {
                return NotFound();
            }
            _context.Entry(category).State = EntityState.Deleted;
            
            _context.Categories.Remove(category);
            await _context.SaveChangesAsync();

            return category;
        }
    }
}