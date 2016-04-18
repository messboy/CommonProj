using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Backend.App_Start
{
    public class AutoMapperConfig
    {
        /// <summary>
        /// auto-mapping 設定檔
        /// </summary>
        public static void Initialize()
        {
            var profiles = DependencyResolver.Current.GetServices<Profile>();

            Mapper.Initialize(
                i =>
                {
                    //i.AddProfile<CollectionModelMappingProfile>();
                    // 自動註冊所有Profiles
                    foreach (var profile in profiles)
                    {
                        i.AddProfile(profile);
                    }
                }
            );
        }
    }
}