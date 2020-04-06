namespace SD_Project.server.Models.Storage
{
    public class Order
    {
        public int Id { get; set; }
        public int Total { get; set; }
        
        public int OrderBuyerId { get; set; }
        public int OrderProductId { get; set; }
    }
}