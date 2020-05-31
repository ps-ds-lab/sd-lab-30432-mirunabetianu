using Microsoft.EntityFrameworkCore;
using SD_Project.server.Models.Storage;

namespace SD_Project.server.ReportFactory
{
    public interface IReport
    {
        void GenerateReport(Order order);
    }
}