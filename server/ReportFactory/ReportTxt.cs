using System;
using System.IO;
using System.Text;
using SD_Project.server.Models.Storage;

namespace SD_Project.server.ReportFactory
{
    public class ReportTxt : IReport
    {
        public void GenerateReport(Order order)
        {
            var file = new StreamWriter(Path.Combine(Directory.GetCurrentDirectory(), "Receipt.txt"));
            
            file.Write("Receipt");
            file.Write("Total price: " + order.Total);
            file.Write("Seller name: " + order.OrderSellerId);
            file.Write("Product number: #" + order.OrderProductId);
            
            file.Close();
        }
    }
}