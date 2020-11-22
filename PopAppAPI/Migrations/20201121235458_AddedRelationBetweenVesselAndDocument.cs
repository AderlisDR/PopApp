using Microsoft.EntityFrameworkCore.Migrations;

namespace PopAppAPI.Migrations
{
    public partial class AddedRelationBetweenVesselAndDocument : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "VesselId",
                table: "Documents",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Documents_VesselId",
                table: "Documents",
                column: "VesselId");

            migrationBuilder.AddForeignKey(
                name: "FK_Documents_Vessels_VesselId",
                table: "Documents",
                column: "VesselId",
                principalTable: "Vessels",
                principalColumn: "VesselId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Documents_Vessels_VesselId",
                table: "Documents");

            migrationBuilder.DropIndex(
                name: "IX_Documents_VesselId",
                table: "Documents");

            migrationBuilder.DropColumn(
                name: "VesselId",
                table: "Documents");
        }
    }
}
