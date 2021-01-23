﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using PopApp.Structure.Data;

namespace PopAppAPI.Migrations
{
    [DbContext(typeof(PopAppContext))]
    partial class PopAppContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.9")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("PopAppCore.Entities.Company", b =>
                {
                    b.Property<int>("CompanyId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("CompanyAdrees")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("CompanyCode")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("CompanyName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("CompanyPhone")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("IsActive")
                        .HasColumnType("bit");

                    b.HasKey("CompanyId");

                    b.ToTable("Companies");
                });

            modelBuilder.Entity("PopAppCore.Entities.Container", b =>
                {
                    b.Property<int>("ContainerId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<decimal?>("ContainerCapacity")
                        .HasColumnType("decimal(4,2)");

                    b.Property<decimal?>("ContainerHeigth")
                        .HasColumnType("decimal(4,2)");

                    b.Property<decimal?>("ContainerLenth")
                        .HasColumnType("decimal(4,2)");

                    b.Property<decimal?>("ContainerPayload")
                        .HasColumnType("decimal(4,2)");

                    b.Property<string>("ContainerType")
                        .HasColumnType("nvarchar(max)");

                    b.Property<decimal?>("ContainerWidth")
                        .HasColumnType("decimal(4,2)");

                    b.Property<bool>("IsActive")
                        .HasColumnType("bit");

                    b.HasKey("ContainerId");

                    b.ToTable("Containers");
                });

            modelBuilder.Entity("PopAppCore.Entities.ContainerTypeModel", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("ContainerType")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("IsActive")
                        .HasColumnType("bit");

                    b.HasKey("Id");

                    b.ToTable("containerType");
                });

            modelBuilder.Entity("PopAppCore.Entities.Document", b =>
                {
                    b.Property<int>("DocumentId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("CreateAt")
                        .HasColumnType("datetime2");

                    b.Property<string>("DocumentDescription")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("DocumentImage")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("DocumentTitle")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("IsActive")
                        .HasColumnType("bit");

                    b.Property<int>("VesselId")
                        .HasColumnType("int");

                    b.HasKey("DocumentId");

                    b.HasIndex("VesselId");

                    b.ToTable("Documents");
                });

            modelBuilder.Entity("PopAppCore.Entities.Freigth", b =>
                {
                    b.Property<int>("FreigthId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("FreigthCode")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FreigthDescription")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FreigthType")
                        .HasColumnType("nvarchar(max)");

                    b.Property<decimal>("FreigthWeigth")
                        .HasColumnType("decimal(4,2)");

                    b.Property<bool>("IsActive")
                        .HasColumnType("bit");

                    b.HasKey("FreigthId");

                    b.ToTable("Freigths");
                });

            modelBuilder.Entity("PopAppCore.Entities.Logger", b =>
                {
                    b.Property<int>("LoggerId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("LoggerDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("Process")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Screen")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserName")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("LoggerId");

                    b.ToTable("Loggers");
                });

            modelBuilder.Entity("PopAppCore.Entities.Product", b =>
                {
                    b.Property<int>("ProductId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<bool>("IsActive")
                        .HasColumnType("bit");

                    b.Property<string>("ProductCategory")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ProductDescription")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ProductName")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ProductId");

                    b.ToTable("Products");
                });

            modelBuilder.Entity("PopAppCore.Entities.Schedule", b =>
                {
                    b.Property<int>("ScheduleId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("CreateAt")
                        .HasColumnType("datetime2");

                    b.Property<bool>("IsActive")
                        .HasColumnType("bit");

                    b.Property<DateTime>("ScheduleDate")
                        .HasColumnType("datetime2");

                    b.Property<int>("VesselId")
                        .HasColumnType("int");

                    b.HasKey("ScheduleId");

                    b.HasIndex("VesselId");

                    b.ToTable("Schedules");
                });

            modelBuilder.Entity("PopAppCore.Entities.ScheduleContainer", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("ContainerId")
                        .HasColumnType("int");

                    b.Property<int>("ScheduleId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("ContainerId");

                    b.HasIndex("ScheduleId");

                    b.ToTable("ScheduleContainers");
                });

            modelBuilder.Entity("PopAppCore.Entities.ScheduleContainerFreigth", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("EvaluationMessage")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("EvaluationStatus")
                        .HasColumnType("int");

                    b.Property<int>("FreigthId")
                        .HasColumnType("int");

                    b.Property<int>("ScheduleContainerId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("FreigthId");

                    b.HasIndex("ScheduleContainerId");

                    b.ToTable("ScheduleContainerFreigths");
                });

            modelBuilder.Entity("PopAppCore.Entities.ScheduleContainerFreigthProduct", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("ProductId")
                        .HasColumnType("int");

                    b.Property<int>("ScheduleContainerFreigthId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("ProductId");

                    b.HasIndex("ScheduleContainerFreigthId");

                    b.ToTable("ScheduleContainerFreigthProducts");
                });

            modelBuilder.Entity("PopAppCore.Entities.User", b =>
                {
                    b.Property<int>("UserId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("IsActive")
                        .HasColumnType("bit");

                    b.Property<byte[]>("PasswordHash")
                        .HasColumnType("varbinary(max)");

                    b.Property<byte[]>("PasswordSalt")
                        .HasColumnType("varbinary(max)");

                    b.Property<string>("UserName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("UserRole")
                        .HasColumnType("int");

                    b.HasKey("UserId");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("PopAppCore.Entities.Vessel", b =>
                {
                    b.Property<int>("VesselId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<bool>("IsActive")
                        .HasColumnType("bit");

                    b.Property<string>("VesselArrival")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("VesselCode")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("VesselFlag")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("VesselImo")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("VesselName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("VesselSlora")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("VesselId");

                    b.ToTable("Vessels");
                });

            modelBuilder.Entity("PopAppCore.Entities.Document", b =>
                {
                    b.HasOne("PopAppCore.Entities.Vessel", null)
                        .WithMany("Documents")
                        .HasForeignKey("VesselId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("PopAppCore.Entities.Schedule", b =>
                {
                    b.HasOne("PopAppCore.Entities.Vessel", "Vessel")
                        .WithMany()
                        .HasForeignKey("VesselId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("PopAppCore.Entities.ScheduleContainer", b =>
                {
                    b.HasOne("PopAppCore.Entities.Container", "Container")
                        .WithMany()
                        .HasForeignKey("ContainerId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("PopAppCore.Entities.Schedule", "Schedule")
                        .WithMany()
                        .HasForeignKey("ScheduleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("PopAppCore.Entities.ScheduleContainerFreigth", b =>
                {
                    b.HasOne("PopAppCore.Entities.Freigth", "Freigth")
                        .WithMany()
                        .HasForeignKey("FreigthId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("PopAppCore.Entities.ScheduleContainer", "ScheduleContainer")
                        .WithMany()
                        .HasForeignKey("ScheduleContainerId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("PopAppCore.Entities.ScheduleContainerFreigthProduct", b =>
                {
                    b.HasOne("PopAppCore.Entities.Product", "Product")
                        .WithMany()
                        .HasForeignKey("ProductId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("PopAppCore.Entities.ScheduleContainerFreigth", "ScheduleContainerFreigth")
                        .WithMany()
                        .HasForeignKey("ScheduleContainerFreigthId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}
