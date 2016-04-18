﻿using NLog.LayoutRenderers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;


namespace Utility.Extensions.NLOG
{
    [LayoutRenderer("aspnetmvc-action")]
    public class ActionLayoutRenderer : LayoutRenderer
    {
        protected override void Append(StringBuilder builder, NLog.LogEventInfo logEvent)
        {
            var actionName = string.Empty;
            if (System.Web.HttpContext.Current != null)
            {
                actionName = HttpContext.Current.Request.RequestContext.RouteData.Values["action"].ToString();
            }

            builder.Append(actionName);
        }
    }
}
