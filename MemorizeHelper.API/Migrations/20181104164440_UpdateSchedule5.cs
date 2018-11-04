using Microsoft.EntityFrameworkCore.Migrations;

namespace MemorizeHelper.API.Migrations
{
    public partial class UpdateSchedule5 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_MemorizeUnits_Content_UnitContentId",
                table: "MemorizeUnits");

            migrationBuilder.DropColumn(
                name: "unitContent",
                table: "MemorizeUnits");

            migrationBuilder.RenameColumn(
                name: "UnitContentId",
                table: "MemorizeUnits",
                newName: "unitContentid");

            migrationBuilder.RenameIndex(
                name: "IX_MemorizeUnits_UnitContentId",
                table: "MemorizeUnits",
                newName: "IX_MemorizeUnits_unitContentid");

            migrationBuilder.AlterColumn<int>(
                name: "unitContentid",
                table: "MemorizeUnits",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_MemorizeUnits_Content_unitContentid",
                table: "MemorizeUnits",
                column: "unitContentid",
                principalTable: "Content",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_MemorizeUnits_Content_unitContentid",
                table: "MemorizeUnits");

            migrationBuilder.RenameColumn(
                name: "unitContentid",
                table: "MemorizeUnits",
                newName: "UnitContentId");

            migrationBuilder.RenameIndex(
                name: "IX_MemorizeUnits_unitContentid",
                table: "MemorizeUnits",
                newName: "IX_MemorizeUnits_UnitContentId");

            migrationBuilder.AlterColumn<int>(
                name: "UnitContentId",
                table: "MemorizeUnits",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AddColumn<int>(
                name: "unitContent",
                table: "MemorizeUnits",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddForeignKey(
                name: "FK_MemorizeUnits_Content_UnitContentId",
                table: "MemorizeUnits",
                column: "UnitContentId",
                principalTable: "Content",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
