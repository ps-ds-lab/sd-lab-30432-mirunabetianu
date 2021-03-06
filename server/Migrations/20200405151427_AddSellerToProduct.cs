﻿using Microsoft.EntityFrameworkCore.Migrations;

namespace SD_Project.server.Migrations
{
    public partial class AddSellerToProduct : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Seller",
                table: "Products",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Seller",
                table: "Products");
        }
    }
}
