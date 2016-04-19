using AutoMapper;
using Dao;
using Dao.Constants;
using Model;
using Model.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Mappings
{
    public class ArticleModelMappingProfile : Profile
    {
        public ArticleModelMappingProfile() : base("ArticleModelProfile") { }

        protected override void Configure()
        {
            // insert update 使用
            Mapper.CreateMap<ArticleViewModel, Content>()
                    .ForMember(i => i.ContentID, s => s.MapFrom(i => i.ContentID))
                    .ForMember(i => i.ContentType, s => s.MapFrom(i => ContentType.ARTICLE))           //自訂
                    .ForMember(i => i.Category, s => s.MapFrom(i => i.Category))
                    .ForMember(i => i.Title, s => s.MapFrom(i => i.Title))
                    .ForMember(i => i.Description, s => s.MapFrom(i => i.Description))
                    .ForMember(i => i.Language, s => s.MapFrom(i => i.Language))
                    .ForMember(i => i.Category, s => s.MapFrom(i => i.Category))
                    .ForMember(i => i.Rights, s => s.MapFrom(i => i.Rights))
                    .ForMember(i => i.ResourceLink, s => s.MapFrom(i => i.ResourceLink))
                    .ForMember(i => i.IsPublish, s => s.MapFrom(i => i.IsPublish))
                    .ForMember(i => i.Keyword, s => s.MapFrom(i => i.Keyword))
                    .ForMember(i => i.IsOuterCoverImage, s => s.MapFrom(i => i.IsOuterCoverImage))
                    .ForMember(i => i.Note, s => s.MapFrom(i => i.Note))
                    ;      

            // getlist dateail 用
            Mapper.CreateMap<Content, ArticleViewModel>()
                   .ForMember(i => i.ContentID, s => s.MapFrom(i => i.ContentID))
                    .ForMember(i => i.ContentType, s => s.MapFrom(i => i.ContentType))
                    .ForMember(i => i.Category, s => s.MapFrom(i => i.Category))
                    .ForMember(i => i.Title, s => s.MapFrom(i => i.Title))
                    .ForMember(i => i.Description, s => s.MapFrom(i => i.Description))
                    .ForMember(i => i.Language, s => s.MapFrom(i => i.Language))
                    .ForMember(i => i.Category, s => s.MapFrom(i => i.Category))
                    .ForMember(i => i.Rights, s => s.MapFrom(i => i.Rights))
                    .ForMember(i => i.ResourceLink, s => s.MapFrom(i => i.ResourceLink))
                    .ForMember(i => i.IsPublish, s => s.MapFrom(i => i.IsPublish))
                    .ForMember(i => i.Keyword, s => s.MapFrom(i => i.Keyword))
                    .ForMember(i => i.IsOuterCoverImage, s => s.MapFrom(i => i.IsOuterCoverImage))
                    .ForMember(i => i.Note, s => s.MapFrom(i => i.Note))
                    ;
        }
    }
}
