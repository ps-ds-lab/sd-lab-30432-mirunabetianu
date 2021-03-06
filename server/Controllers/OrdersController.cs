using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SD_Project.server.Models;
using SD_Project.server.Models.Storage;
using SD_Project.server.ReportFactory;

namespace SD_Project.server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class OrdersController: ControllerBase
    {
        private readonly OlxDatabaseContext _context;

        public OrdersController(OlxDatabaseContext context)
        {
            _context = context;
        }
        
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Order>>> GetOrder()
        {
            return await _context.Orders.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Order>> GetOrder(int id)
        {
            var order = await _context.Orders.FindAsync(id);
            if (order == null)
            {
                return NotFound();
            }

            return order;
        }

        
        [HttpPost]
        public async Task<ActionResult<Order>> PostOrder(Order order)
        {
            var concreteReportFactory = new ConcreteReportFactory();
            concreteReportFactory.GetReport("pdf").GenerateReport(order);
            concreteReportFactory.GetReport("txt").GenerateReport(order);
            _context.Orders.Add(order);
            await _context.SaveChangesAsync();

            return CreatedAtAction("", new {id = order.Id}, order);
        }
        

        [HttpPut("{id}")]
        public async Task<IActionResult> PutOrder(int id, Order order)
        {
            if (id != order.Id)
                return BadRequest();

            _context.Entry(order).State = EntityState.Modified;

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
        public async Task<ActionResult<Order>> DeleteOrder(int id)
        {
            var order = await _context.Orders.FindAsync(id);
           
            if (order == null)
            {
                return NotFound();
            }
            _context.Entry(order).State = EntityState.Deleted;
            
            _context.Orders.Remove(order);
            await _context.SaveChangesAsync();

            return order;
        }
    }
}