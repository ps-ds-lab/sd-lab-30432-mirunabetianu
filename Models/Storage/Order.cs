using SD_Project.Models.Users;

namespace SD_Project.Models.Storage
{
    public class Order
    {
        public int Id { get; set; }
        public int Total { get; set; }
        
        public int OrderBuyerId { get; set; }
        public int OrderProductId { get; set; }
    }
}