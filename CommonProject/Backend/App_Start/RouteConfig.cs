using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace Backend
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );

            routes.MapRoute(
                name: "ImgZoomRoute",
                url: "imgs/{thumbnailType}/{width}/{height}/{*imgPath}",
                defaults: new { controller = "FileUtility", action = "ZoomImg", id = UrlParameter.Optional }
            );

            routes.MapRoute(
                name: "FileDownloadRoute",
                url: "downloadFile/{filename}/{*path}",
                defaults: new { controller = "FileUtility", action = "DownloadFile", id = UrlParameter.Optional }
            );
        }
    }
}
