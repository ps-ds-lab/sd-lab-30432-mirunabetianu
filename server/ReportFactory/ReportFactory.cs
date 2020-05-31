using Microsoft.EntityFrameworkCore;
using SD_Project.server.Models.Storage;

namespace SD_Project.server.ReportFactory
{
    public abstract class ReportFactory
    {
        public abstract IReport GetReport(string type);
    }
}