using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SD_Project.Model;
using SD_Project.Models;
using SD_Project.Models.Storage;


namespace SD_Project.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductsController : ControllerBase
    {
        
        private readonly OlxDatabaseContext _context;

        public ProductsController(OlxDatabaseContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Product>>> GetProduct()
        {
            return await _context.Products.ToListAsync();
        }

        [HttpGet("{id}", Name="GetProduct")]
        public async Task<ActionResult<Product>> GetProduct(int id)
        {
            var product = await _context.Products.FindAsync(id);
            if (product == null)
            {
                return NotFound();
            }

            return product;
        }

        
        [HttpPost]
        public async Task<ActionResult<Product>> PostProduct(Product product)
        {
            _context.Products.Add(product);
            await _context.SaveChangesAsync();

            return CreatedAtAction("", new {id = product.Id}, product);
        }
        

        [HttpPut("{id}")]
        public async Task<IActionResult> PutProduct(int id, Product product)
        {
            if (id != product.Id)
                return BadRequest();

            _context.Entry(product).State = EntityState.Modified;

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
        public async Task<ActionResult<Product>> DeleteProduct(int id)
        {
            var product = await _context.Products.FindAsync(id);
           
            if (product == null)
            {
                return NotFound();
            }
            _context.Entry(product).State = EntityState.Deleted;
            
            _context.Products.Remove(product);
            await _context.SaveChangesAsync();

            return product;
        }
        
    }
}