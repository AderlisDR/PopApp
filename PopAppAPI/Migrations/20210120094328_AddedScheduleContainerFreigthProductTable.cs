using Microsoft.EntityFrameworkCore.Migrations;

namespace PopAppAPI.Migrations
{
    public partial class AddedScheduleContainerFreigthProductTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ScheduleContainerFreigthProducts",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ScheduleContainerFreigthId = table.Column<int>(nullable: false),
                    ProductId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ScheduleContainerFreigthProducts", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ScheduleContainerFreigthProducts_Products_ProductId",
                        column: x => x.ProductId,
                        principalTable: "Products",
                        principalColumn: "ProductId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ScheduleContainerFreigthProducts_ScheduleContainerFreigths_ScheduleContainerFreigthId",
                        column: x => x.ScheduleContainerFreigthId,
                        principalTable: "ScheduleContainerFreigths",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ScheduleContainerFreigthProducts_ProductId",
                table: "ScheduleContainerFreigthProducts",
                column: "ProductId");

            migrationBuilder.CreateIndex(
                name: "IX_ScheduleContainerFreigthProducts_ScheduleContainerFreigthId",
                table: "ScheduleContainerFreigthProducts",
                column: "ScheduleContainerFreigthId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ScheduleContainerFreigthProducts");
        }
    }
}
