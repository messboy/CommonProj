using AutoMapper;
using Dao;
using Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Mappings
{
    public class AdminModelMappingProfile : Profile
    {
        public AdminModelMappingProfile() : base("AdminModelProfile") { }

        protected override void Configure()
        {
            // insert update 使用
            Mapper.CreateMap<AdminInfo, Admin>()
                    .ForMember(i => i.ID, s => s.MapFrom(i => i.ID))
                    .ForMember(i => i.Account, s => s.MapFrom(i => i.Account))
                    .ForMember(i => i.Password, s => s.MapFrom(i => i.Password))
                    .ForMember(i => i.Role, s => s.MapFrom(i => i.Role))
                    .ForMember(i => i.Name, s => s.MapFrom(i => i.Name))
                    .ForMember(i => i.Tel, s => s.MapFrom(i => i.Tel))
                    .ForMember(i => i.Email, s => s.MapFrom(i => i.Email))
                    .ForMember(i => i.Mobile, s => s.MapFrom(i => i.Mobile))
                    .ForMember(i => i.Enable, s => s.MapFrom(i => i.Enable))
                    .ForMember(i => i.Menu, s => s.MapFrom(i => i.Menu))
                    ;

            // getlist dateail 用
            Mapper.CreateMap<Admin, AdminInfo>()
                    .ForMember(i => i.ID, s => s.MapFrom(i => i.ID))
                    .ForMember(i => i.Account, s => s.MapFrom(i => i.Account))
                    .ForMember(i => i.Password, s => s.MapFrom(i => i.Password))
                    .ForMember(i => i.Role, s => s.MapFrom(i => i.Role))
                    .ForMember(i => i.Name, s => s.MapFrom(i => i.Name))
                    .ForMember(i => i.Tel, s => s.MapFrom(i => i.Tel))
                    .ForMember(i => i.Email, s => s.MapFrom(i => i.Email))
                    .ForMember(i => i.Mobile, s => s.MapFrom(i => i.Mobile))
                    .ForMember(i => i.Enable, s => s.MapFrom(i => i.Enable))
                    .ForMember(i => i.CreateTime, s => s.MapFrom(i => i.CreateTime))
                    .ForMember(i => i.ModifiedTime, s => s.MapFrom(i => i.ModifiedTime))
                    .ForMember(i => i.Creator, s => s.MapFrom(i => i.Creator))
                    .ForMember(i => i.ModifiedBy, s => s.MapFrom(i => i.ModifiedBy))
                    .ForMember(i => i.LastLogonIP, s => s.MapFrom(i => i.LastLogonIP))
                    .ForMember(i => i.LastLogonTime, s => s.MapFrom(i => i.LastLogonTime))
                    .ForMember(i => i.Menu, s => s.MapFrom(i => i.Menu))
                    ;
        }
    }
}
