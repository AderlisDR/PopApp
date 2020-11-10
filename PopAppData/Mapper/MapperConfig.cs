using AutoMapper;
using PopApp.Core.Dtos;
using PopApp.Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace PopApp.Structure.Mapper
{
    class MapperConfig : Profile
    {
        public MapperConfig()
        {
            CreateMap<Vessel, VesselDto>().ReverseMap();
            CreateMap<User, UserDto>().ReverseMap();
            CreateMap<Product, ProductDto>().ReverseMap();
            CreateMap<Freigth, FreigthDto>().ReverseMap();
            CreateMap<Document, DocumentDto>().ReverseMap();
            CreateMap<Container, ContainerDto>().ReverseMap();
            CreateMap<Company, CompanyDto>().ReverseMap();
            CreateMap<Logger, LoggerDto>().ReverseMap();
        }
    }
}
