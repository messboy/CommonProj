using Backend.Filter;
using BLL.Interfaces;
using Model.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Utility.Extensions.JsonNet;
using Utility.Extensions.Pagination;
using Utility.Extensions.Security;
using Utility.Logging;

namespace Backend.Controllers
{
    public class ArticleController : JsonNetController
    {
        private readonly IArticleService ArticleService;
        private readonly ILogger Logger;

        public ArticleController(IArticleService EBookSvc, ILogger logger)
        {
            this.ArticleService = EBookSvc;
            this.Logger = logger;
        }

        [ValidateModel]
        public ActionResult Add(ArticleViewModel model)
        {
            this.ArticleService.Insert(model);
            return Json(true, JsonRequestBehavior.AllowGet);
        }

        public ActionResult Update(ArticleViewModel model)
        {
            this.ArticleService.Update(model);
            return Json(true, JsonRequestBehavior.AllowGet);
        }

        public ActionResult Delete(string id)
        {
            ArticleService.Delete(id);
            return Json(id, JsonRequestBehavior.AllowGet);
        }


        public ActionResult GetList(PaginationModel model)
        {
            var Identity = HttpContext.User.ToCustomPrincipal().CustomIdentity;
            return Json(ArticleService.GetList(model, Identity), JsonRequestBehavior.AllowGet);
        }

        public ActionResult GetDetail(string id)
        {
            return Json(ArticleService.GetDetail(id), JsonRequestBehavior.AllowGet);
        }
    }
}