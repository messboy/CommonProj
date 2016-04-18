using NLog.Config;
using Utility.Extensions.NLOG;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Backend.App_Start
{
    public class NLogConfig
    {
        public static void Initialize()
        {
            ConfigurationItemFactory.Default.LayoutRenderers.RegisterDefinition("aspnetmvc-controller", typeof(ControllerLayoutRenderer));
            ConfigurationItemFactory.Default.LayoutRenderers.RegisterDefinition("aspnetmvc-action", typeof(ActionLayoutRenderer));
            ConfigurationItemFactory.Default.LayoutRenderers.RegisterDefinition("aspnetmvc-user", typeof(UserLayoutRenderer));
            ConfigurationItemFactory.Default.LayoutRenderers.RegisterDefinition("aspnetmvc-museum", typeof(MuseumLayoutRenderer));
        }
    }
}