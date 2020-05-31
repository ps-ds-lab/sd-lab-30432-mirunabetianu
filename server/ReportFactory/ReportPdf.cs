using System;
using System.IO;
using Microsoft.EntityFrameworkCore;
using SD_Project.server.Models.Storage;
using IronPdf;


namespace SD_Project.server.ReportFactory
{
    public class ReportPdf : IReport
    {
        public void GenerateReport(Order order)
        {
            Console.WriteLine("Hold on tight!");

            var htmlToPdf = new HtmlToPdf();  // new instance of HtmlToPdf

            //html to pdf
            //html to turn into pdf
            var html = $@"<h1>Receipt</h1><br><p>Total price:{order.Total}</p><br><p>Seller name:{order.OrderSellerId}</p><br><p>Product: #{order.OrderProductId}</p>";

            // turn html to pdf
            var pdf = htmlToPdf.RenderHtmlAsPdf(html);

            // save resulting pdf into file
            pdf.SaveAs(Path.Combine(Directory.GetCurrentDirectory(), "Receipt.Pdf"));

            Console.WriteLine("Done. Please find results under '{0}' directory.", Directory.GetCurrentDirectory());
            Console.WriteLine("Press any key to continue.");
            Console.ReadKey();

        }
    }
}