using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Principal;
using System.Web;

namespace Utility.Extensions.Security
{
    public static class SecurityExtentions
    {
        public static CustomPrincipal ToCustomPrincipal(this IPrincipal principal)
        {
            return principal as CustomPrincipal;
        }
    }
}
