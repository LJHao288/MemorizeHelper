using Microsoft.EntityFrameworkCore.Migrations;

namespace MemorizeHelper.API.Migrations
{
    public partial class Addusername4 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
           
            migrationBuilder.AddColumn<string>(
                name: "OwnerUsername",
                table: "MemorizeUnits",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "OwnerUsername",
                table: "MemorizeUnits");

            migrationBuilder.AddColumn<int>(
                name: "unitContent",
                table: "MemorizeUnits",
                nullable: false,
                defaultValue: 0);
        }
    }
}
