using Autofac;
using Autofac.Configuration;
using Autofac.Integration.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Utility.Logging.NLog.Autofac;

namespace Backend.App_Start
{
    public class AutofacConfig
    {
        public static void Initialize()
        {
            var builder = new ContainerBuilder();

            builder.RegisterControllers(typeof(MvcApplication).Assembly);

            builder.RegisterModule(new NLogLoggerAutofacModule());

            //// Read autofac settings from config ->至webconfig 設定autofac組態
            builder.RegisterModule(new ConfigurationSettingsReader());

            var container = builder.Build();

            DependencyResolver.SetResolver(new AutofacDependencyResolver(container));
        }
    }
}