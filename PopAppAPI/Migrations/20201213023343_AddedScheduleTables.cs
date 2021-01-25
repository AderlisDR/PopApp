using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace PopAppAPI.Migrations
{
    public partial class AddedScheduleTables : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "ContainerId",
                table: "Freigths",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "VesselId",
                table: "Containers",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "containerType",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ContainerType = table.Column<string>(nullable: true),
                    IsActive = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_containerType", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Schedules",
                columns: table => new
                {
                    ScheduleId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ScheduleDate = table.Column<DateTime>(nullable: false),
                    VesselId = table.Column<int>(nullable: false),
                    CreateAt = table.Column<DateTime>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Schedules", x => x.ScheduleId);
                    table.ForeignKey(
                        name: "FK_Schedules_Vessels_VesselId",
                        column: x => x.VesselId,
                        principalTable: "Vessels",
                        principalColumn: "VesselId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Freigths_ContainerId",
                table: "Freigths",
                column: "ContainerId");

            migrationBuilder.CreateIndex(
                name: "IX_Containers_VesselId",
                table: "Containers",
                column: "VesselId");

            migrationBuilder.CreateIndex(
                name: "IX_Schedules_VesselId",
                table: "Schedules",
                column: "VesselId");

            migrationBuilder.AddForeignKey(
                name: "FK_Containers_Vessels_VesselId",
                table: "Containers",
                column: "VesselId",
                principalTable: "Vessels",
                principalColumn: "VesselId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Freigths_Containers_ContainerId",
                table: "Freigths",
                column: "ContainerId",
                principalTable: "Containers",
                principalColumn: "ContainerId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Containers_Vessels_VesselId",
                table: "Containers");

            migrationBuilder.DropForeignKey(
                name: "FK_Freigths_Containers_ContainerId",
                table: "Freigths");

            migrationBuilder.DropTable(
                name: "containerType");

            migrationBuilder.DropTable(
                name: "Schedules");

            migrationBuilder.DropIndex(
                name: "IX_Freigths_ContainerId",
                table: "Freigths");

            migrationBuilder.DropIndex(
                name: "IX_Containers_VesselId",
                table: "Containers");

            migrationBuilder.DropColumn(
                name: "ContainerId",
                table: "Freigths");

            migrationBuilder.DropColumn(
                name: "VesselId",
                table: "Containers");
        }
    }
}
