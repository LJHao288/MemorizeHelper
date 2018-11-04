using Microsoft.EntityFrameworkCore.Migrations;

namespace MemorizeHelper.API.Migrations
{
    public partial class ReverseDB1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Content_MemorizeUnits_MemorizeUnitId",
                table: "Content");

            migrationBuilder.DropIndex(
                name: "IX_Content_MemorizeUnitId",
                table: "Content");

            migrationBuilder.DropColumn(
                name: "MemorizeUnitId",
                table: "Content");

            migrationBuilder.AddColumn<int>(
                name: "UnitContentId",
                table: "MemorizeUnits",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Text",
                table: "Content",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_MemorizeUnits_UnitContentId",
                table: "MemorizeUnits",
                column: "UnitContentId");

            migrationBuilder.AddForeignKey(
                name: "FK_MemorizeUnits_Content_UnitContentId",
                table: "MemorizeUnits",
                column: "UnitContentId",
                principalTable: "Content",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_MemorizeUnits_Content_UnitContentId",
                table: "MemorizeUnits");

            migrationBuilder.DropIndex(
                name: "IX_MemorizeUnits_UnitContentId",
                table: "MemorizeUnits");

            migrationBuilder.DropColumn(
                name: "UnitContentId",
                table: "MemorizeUnits");

            migrationBuilder.DropColumn(
                name: "Text",
                table: "Content");

            migrationBuilder.AddColumn<int>(
                name: "MemorizeUnitId",
                table: "Content",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Content_MemorizeUnitId",
                table: "Content",
                column: "MemorizeUnitId");

            migrationBuilder.AddForeignKey(
                name: "FK_Content_MemorizeUnits_MemorizeUnitId",
                table: "Content",
                column: "MemorizeUnitId",
                principalTable: "MemorizeUnits",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
