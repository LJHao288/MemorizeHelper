using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace MemorizeHelper.API.Migrations
{
    public partial class MemorizeUnit : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
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

            migrationBuilder.CreateTable(
                name: "MemorizeUnits",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    OwnerUserid = table.Column<int>(nullable: true),
                    Title = table.Column<string>(nullable: true),
                    UnitContentId = table.Column<int>(nullable: true),
                    SubjectName = table.Column<string>(nullable: true),
                    IsPrivate = table.Column<bool>(nullable: false),
                    CreationDate = table.Column<DateTime>(nullable: false),
                    Priority = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MemorizeUnits", x => x.Id);
                    table.ForeignKey(
                        name: "FK_MemorizeUnits_Content_UnitContentId",
                        column: x => x.UnitContentId,
                        principalTable: "Content",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Schedule",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Date = table.Column<DateTime>(nullable: false),
                    MemorizeUnitId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Schedule", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Schedule_MemorizeUnits_MemorizeUnitId",
                        column: x => x.MemorizeUnitId,
                        principalTable: "MemorizeUnits",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Tag",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Word = table.Column<string>(nullable: true),
                    MemorizeUnitId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tag", x => x.id);
                    table.ForeignKey(
                        name: "FK_Tag_MemorizeUnits_MemorizeUnitId",
                        column: x => x.MemorizeUnitId,
                        principalTable: "MemorizeUnits",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "User_",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Username = table.Column<string>(nullable: true),
                    MemorizeUnitId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_User_", x => x.id);
                    table.ForeignKey(
                        name: "FK_User__MemorizeUnits_MemorizeUnitId",
                        column: x => x.MemorizeUnitId,
                        principalTable: "MemorizeUnits",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_MemorizeUnits_OwnerUserid",
                table: "MemorizeUnits",
                column: "OwnerUserid");

            migrationBuilder.CreateIndex(
                name: "IX_MemorizeUnits_UnitContentId",
                table: "MemorizeUnits",
                column: "UnitContentId");

            migrationBuilder.CreateIndex(
                name: "IX_Schedule_MemorizeUnitId",
                table: "Schedule",
                column: "MemorizeUnitId");

            migrationBuilder.CreateIndex(
                name: "IX_Tag_MemorizeUnitId",
                table: "Tag",
                column: "MemorizeUnitId");

            migrationBuilder.CreateIndex(
                name: "IX_User__MemorizeUnitId",
                table: "User_",
                column: "MemorizeUnitId");

            migrationBuilder.AddForeignKey(
                name: "FK_MemorizeUnits_User__OwnerUserid",
                table: "MemorizeUnits",
                column: "OwnerUserid",
                principalTable: "User_",
                principalColumn: "id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_MemorizeUnits_User__OwnerUserid",
                table: "MemorizeUnits");

            migrationBuilder.DropTable(
                name: "Schedule");

            migrationBuilder.DropTable(
                name: "Tag");

            migrationBuilder.DropTable(
                name: "User_");

            migrationBuilder.DropTable(
                name: "MemorizeUnits");

            migrationBuilder.DropTable(
                name: "Content");
        }
    }
}
