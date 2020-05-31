using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using Microsoft.AspNetCore.Http.Extensions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SD_Project.server.Models;
using SD_Project.server.Models.Storage;

namespace SD_Project.server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
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
            var url = Request.GetDisplayUrl();
            var myUri = new Uri(url);
            var param1 = HttpUtility.ParseQueryString(myUri.Query).Get("categoryId");
            if(param1 == null)
                return await _context.Products.ToListAsync();

            var id = int.Parse(param1);
            
            var category = await _context.Categories.FindAsync(id);

            if (category == null) return NotFound();
            
            return _context.Products.Where(product => product.ProductCategoryId == id).ToList();
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

            var rating = 0;

            Console.WriteLine(rating);
            
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