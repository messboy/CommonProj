using NLog.LayoutRenderers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Web;

namespace Utility.Extensions.NLOG
{
    [LayoutRenderer("aspnetmvc-user")]
    public class UserLayoutRenderer : LayoutRenderer
    {
        protected override void Append(StringBuilder builder, NLog.LogEventInfo logEvent)
        {
            var userName = string.Empty;
            if (Thread.CurrentPrincipal.Identity != null)
            {
                userName = Thread.CurrentPrincipal.Identity.Name;
            }

            builder.Append(userName);
        }
    }
}
