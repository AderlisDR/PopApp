using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace PopAppAPI.Migrations
{
    public partial class InitialMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Companies",
                columns: table => new
                {
                    CompanyId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CompanyName = table.Column<string>(nullable: true),
                    CompanyCode = table.Column<string>(nullable: true),
                    CompanyAdrees = table.Column<string>(nullable: true),
                    CompanyPhone = table.Column<string>(nullable: true),
                    IsActive = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Companies", x => x.CompanyId);
                });

            migrationBuilder.CreateTable(
                name: "Containers",
                columns: table => new
                {
                    ContainerId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ContainerType = table.Column<string>(nullable: true),
                    ContainerPayload = table.Column<decimal>(type: "decimal(4,2)", nullable: true),
                    ContainerCapacity = table.Column<decimal>(type: "decimal(4,2)", nullable: true),
                    ContainerLenth = table.Column<decimal>(type: "decimal(4,2)", nullable: true),
                    ContainerWidth = table.Column<decimal>(type: "decimal(4,2)", nullable: true),
                    ContainerHeigth = table.Column<decimal>(type: "decimal(4,2)", nullable: true),
                    IsActive = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Containers", x => x.ContainerId);
                });

            migrationBuilder.CreateTable(
                name: "Documents",
                columns: table => new
                {
                    DocumentId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    DocumentTitle = table.Column<string>(nullable: true),
                    DocumentDescription = table.Column<string>(nullable: true),
                    DocumentImage = table.Column<byte[]>(nullable: true),
                    CreateAt = table.Column<DateTime>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Documents", x => x.DocumentId);
                });

            migrationBuilder.CreateTable(
                name: "Freigths",
                columns: table => new
                {
                    FreigthId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FreigthCode = table.Column<string>(nullable: true),
                    FreigthDescription = table.Column<string>(nullable: true),
                    FreigthType = table.Column<string>(nullable: true),
                    FreigthWeigth = table.Column<decimal>(type: "decimal(4,2)", nullable: false),
                    IsActive = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Freigths", x => x.FreigthId);
                });

            migrationBuilder.CreateTable(
                name: "Loggers",
                columns: table => new
                {
                    LoggerId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Screen = table.Column<string>(nullable: true),
                    UserName = table.Column<string>(nullable: true),
                    Process = table.Column<string>(nullable: true),
                    LoggerDate = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Loggers", x => x.LoggerId);
                });

            migrationBuilder.CreateTable(
                name: "Products",
                columns: table => new
                {
                    ProductId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ProductName = table.Column<string>(nullable: true),
                    ProductDescription = table.Column<string>(nullable: true),
                    ProductCategory = table.Column<string>(nullable: true),
                    IsActive = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Products", x => x.ProductId);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    UserId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserName = table.Column<string>(nullable: true),
                    Email = table.Column<string>(nullable: true),
                    PasswordHash = table.Column<byte[]>(nullable: true),
                    PasswordSalt = table.Column<byte[]>(nullable: true),
                    UserRole = table.Column<int>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.UserId);
                });

            migrationBuilder.CreateTable(
                name: "Vessels",
                columns: table => new
                {
                    VesselId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    VesselName = table.Column<string>(nullable: true),
                    VesselCode = table.Column<string>(nullable: true),
                    VesselImo = table.Column<string>(nullable: true),
                    VesselFlag = table.Column<string>(nullable: true),
                    VesselSlora = table.Column<string>(nullable: true),
                    VesselArrival = table.Column<string>(nullable: true),
                    IsActive = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Vessels", x => x.VesselId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Companies");

            migrationBuilder.DropTable(
                name: "Containers");

            migrationBuilder.DropTable(
                name: "Documents");

            migrationBuilder.DropTable(
                name: "Freigths");

            migrationBuilder.DropTable(
                name: "Loggers");

            migrationBuilder.DropTable(
                name: "Products");

            migrationBuilder.DropTable(
                name: "Users");

            migrationBuilder.DropTable(
                name: "Vessels");
        }
    }
}
