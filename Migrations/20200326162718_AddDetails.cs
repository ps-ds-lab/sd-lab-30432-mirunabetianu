using Microsoft.EntityFrameworkCore.Migrations;

namespace SD_Project.Migrations
{
    public partial class AddDetails : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "IsBuyer",
                table: "Users",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "IsSeller",
                table: "Users",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "Ads",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(nullable: true),
                    imageUrl = table.Column<string>(nullable: true),
                    linkUrl = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Ads", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Ads");

            migrationBuilder.DropColumn(
                name: "IsBuyer",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "IsSeller",
                table: "Users");
        }
    }
}
