using Utility.Extensions.ErrorHandler;
using Utility.Extensions.NLOG;
using System.Web;
using System.Web.Mvc;

namespace Backend
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());

            // error filter
            filters.Add(DependencyResolver.Current.GetService<ExceptionHandler>()); 
        }
    }
}
