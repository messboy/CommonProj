using Autofac;
using BLL.Interfaces;
using BLL.Services;
using Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using Autofac.Extras.DynamicProxy2;
using Utility.Extensions.NLOG;

namespace BLL.Modules
{
    public class ServiceModule : Autofac.Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            var service = Assembly.Load("BLL.Services");

            //註冊所有類別
            builder.RegisterAssemblyTypes(service)
                   .AsImplementedInterfaces()
                   .EnableInterfaceInterceptors()
                   .InterceptedBy(typeof(BackendLogInterceptor));

            //註冊類別
            //builder.RegisterType<CollectionService>().As<ICollectionService>().EnableInterfaceInterceptors().InterceptedBy(typeof(BackendLogInterceptor));
            //builder.RegisterType<NewsService>().As<INewsService>().EnableInterfaceInterceptors().InterceptedBy(typeof(BackendLogInterceptor));
            //builder.RegisterType<ThemeService>().As<IThemeService>().EnableInterfaceInterceptors().InterceptedBy(typeof(BackendLogInterceptor));
        }
    }
}
