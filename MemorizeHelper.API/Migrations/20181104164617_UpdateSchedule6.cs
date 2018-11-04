using Microsoft.EntityFrameworkCore.Migrations;

namespace MemorizeHelper.API.Migrations
{
    public partial class UpdateSchedule6 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_MemorizeUnits_Content_unitContentid",
                table: "MemorizeUnits");

            migrationBuilder.DropTable(
                name: "Content");

            migrationBuilder.DropIndex(
                name: "IX_MemorizeUnits_unitContentid",
                table: "MemorizeUnits");

            migrationBuilder.DropColumn(
                name: "unitContentid",
                table: "MemorizeUnits");

            migrationBuilder.AddColumn<string>(
                name: "StringContent",
                table: "MemorizeUnits",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "StringContent",
                table: "MemorizeUnits");

            migrationBuilder.AddColumn<int>(
                name: "unitContentid",
                table: "MemorizeUnits",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "Content",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Text = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Content", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_MemorizeUnits_unitContentid",
                table: "MemorizeUnits",
                column: "unitContentid");

            migrationBuilder.AddForeignKey(
                name: "FK_MemorizeUnits_Content_unitContentid",
                table: "MemorizeUnits",
                column: "unitContentid",
                principalTable: "Content",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
