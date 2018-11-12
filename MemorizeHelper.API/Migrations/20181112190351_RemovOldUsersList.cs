using Microsoft.EntityFrameworkCore.Migrations;

namespace MemorizeHelper.API.Migrations
{
    public partial class RemovOldUsersList : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            //migrationBuilder.DropForeignKey(
               // name: "FK_MemorizeUnits_User__OwnerUserid",
              //  table: "MemorizeUnits");

           // migrationBuilder.DropIndex(
           //     name: "IX_MemorizeUnits_OwnerUserid",
           //     table: "MemorizeUnits");

            //migrationBuilder.DropColumn(
              //  name: "OwnerUserid",
              //  table: "MemorizeUnits");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "OwnerUserid",
                table: "MemorizeUnits",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_MemorizeUnits_OwnerUserid",
                table: "MemorizeUnits",
                column: "OwnerUserid");

            migrationBuilder.AddForeignKey(
                name: "FK_MemorizeUnits_User__OwnerUserid",
                table: "MemorizeUnits",
                column: "OwnerUserid",
                principalTable: "User_",
                principalColumn: "id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
