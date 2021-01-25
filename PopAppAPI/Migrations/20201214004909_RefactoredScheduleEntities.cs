using Microsoft.EntityFrameworkCore.Migrations;

namespace PopAppAPI.Migrations
{
    public partial class RefactoredScheduleEntities : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Containers_Vessels_VesselId",
                table: "Containers");

            migrationBuilder.DropForeignKey(
                name: "FK_Freigths_Containers_ContainerId",
                table: "Freigths");

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

            migrationBuilder.CreateTable(
                name: "ScheduleContainers",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ScheduleId = table.Column<int>(nullable: false),
                    ContainerId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ScheduleContainers", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ScheduleContainers_Containers_ContainerId",
                        column: x => x.ContainerId,
                        principalTable: "Containers",
                        principalColumn: "ContainerId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ScheduleContainers_Schedules_ScheduleId",
                        column: x => x.ScheduleId,
                        principalTable: "Schedules",
                        principalColumn: "ScheduleId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ScheduleContainerFreigths",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ScheduleContainerId = table.Column<int>(nullable: false),
                    FreigthId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ScheduleContainerFreigths", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ScheduleContainerFreigths_Freigths_FreigthId",
                        column: x => x.FreigthId,
                        principalTable: "Freigths",
                        principalColumn: "FreigthId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ScheduleContainerFreigths_ScheduleContainers_ScheduleContainerId",
                        column: x => x.ScheduleContainerId,
                        principalTable: "ScheduleContainers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ScheduleContainerFreigths_FreigthId_ScheduleContainerId",
                table: "ScheduleContainerFreigths",
                columns: new string[] { "FreigthId", "ScheduleContainerId" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_ScheduleContainerFreigths_FreigthId",
                table: "ScheduleContainerFreigths",
                column: "FreigthId");

            migrationBuilder.CreateIndex(
                name: "IX_ScheduleContainerFreigths_ScheduleContainerId",
                table: "ScheduleContainerFreigths",
                column: "ScheduleContainerId");

            migrationBuilder.CreateIndex(
                name: "IX_ScheduleContainers_ContainerId_ScheduleId",
                table: "ScheduleContainers",
                columns: new string[] { "ContainerId", "ScheduleId" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_ScheduleContainers_ContainerId",
                table: "ScheduleContainers",
                column: "ContainerId");

            migrationBuilder.CreateIndex(
                name: "IX_ScheduleContainers_ScheduleId",
                table: "ScheduleContainers",
                column: "ScheduleId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ScheduleContainerFreigths");

            migrationBuilder.DropTable(
                name: "ScheduleContainers");

            migrationBuilder.AddColumn<int>(
                name: "ContainerId",
                table: "Freigths",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "VesselId",
                table: "Containers",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Freigths_ContainerId",
                table: "Freigths",
                column: "ContainerId");

            migrationBuilder.CreateIndex(
                name: "IX_Containers_VesselId",
                table: "Containers",
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
    }
}
