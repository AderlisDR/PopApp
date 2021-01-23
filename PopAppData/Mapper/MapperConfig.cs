using AutoMapper;
using PopAppCore.Dtos;
using PopAppCore.Entities;

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
            CreateMap<Schedule, ScheduleDto>().ReverseMap();
            CreateMap<Logger, LoggerDto>().ReverseMap();
            CreateMap<ContainerTypeModel, ContainerTypeModelDto>().ReverseMap();
        }
    }
}
