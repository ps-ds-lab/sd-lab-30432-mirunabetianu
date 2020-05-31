namespace SD_Project.server.Models.Storage
{
    public class Order
    {
        public int Id { get; set; }
        public int Total { get; set; }
        
        public string OrderBuyerId { get; set; }
        public string OrderProductId { get; set; }
        public string OrderSellerId { get; set; }
    }
}