using BLL.Interfaces;
using Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Web;
using System.Web.Mvc;
using Utility.Extensions.JsonNet;
using Utility.Logging;

namespace Backend.Controllers
{
    public class HomeController : JsonNetController
    {
        private readonly IHomeService HomeService;
        private readonly ILogger Logger;

        public HomeController(IHomeService homeservice, ILogger logger)
        {
            this.HomeService = homeservice;
            this.Logger = logger;
        }

        public ActionResult Index()
        {
            var authInfo = new AuthInfo
            {
                Authenticated = Request.IsAuthenticated ? true : false,
            };

            if (Request.IsAuthenticated)
            {
                authInfo.UserName = Thread.CurrentPrincipal.Identity.Name;
            }
            return View(authInfo);
        }


        public ActionResult test()
        {
            ContentInfo data = HomeService.test();
            return Json(data, JsonRequestBehavior.AllowGet);
        }
    }
}