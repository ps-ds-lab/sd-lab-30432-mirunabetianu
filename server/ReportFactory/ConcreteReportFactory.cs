using System;

namespace SD_Project.server.ReportFactory
{
    public class ConcreteReportFactory: ReportFactory
    {
        public override IReport GetReport(string type)
        {
            switch (type)
            {
                case "pdf":
                    return new ReportPdf();
                case "txt":
                    return new ReportTxt();
                default:
                    new ApplicationException("Could not generate report");
                    return null;
            }
        }
    }
}