using Microsoft.EntityFrameworkCore.Migrations;

namespace PopAppAPI.Migrations
{
    public partial class AddedEvaluationStructureToScheduleContainerFreigth : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "EvaluationMessage",
                table: "ScheduleContainerFreigths",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "EvaluationStatus",
                table: "ScheduleContainerFreigths",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "EvaluationMessage",
                table: "ScheduleContainerFreigths");

            migrationBuilder.DropColumn(
                name: "EvaluationStatus",
                table: "ScheduleContainerFreigths");
        }
    }
}
