
namespace SD_Project.server.Models.Storage
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Price { get; set; }
        public string Description { get; set; }
        public int Rating { get; set; }
        public string ImageUrl { get; set; }
        public int SellerId { get; set; }
        public int ProductCategoryId { get; set; }
    }
}