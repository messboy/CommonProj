using BLL.Interfaces;
using Model;
using System;
using System.Collections.Generic;
using System.Linq;
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
            Logger.Debug("test");
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult test()
        {
            ContentInfo data = HomeService.test();
            return Json(data, JsonRequestBehavior.AllowGet);
        }
    }
}