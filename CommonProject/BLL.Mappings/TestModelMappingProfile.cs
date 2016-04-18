using AutoMapper;
using Dao;
using Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;

namespace BLL.Mappings
{
    public class TestModelMappingProfile : Profile 
    {
        public TestModelMappingProfile() : base("TestModelProfile") { }


        protected override void Configure()
        {
            // insert update 使用
            Mapper.CreateMap<ContentInfo, Content>();

            // getlist dateail 用
            Mapper.CreateMap<Content, ContentInfo>()
                   // .ForMember(i => i.ID, s => s.MapFrom(i => i.ID))
                    ;
        }
    }
}
