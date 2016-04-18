using BLL.Interfaces;
using Model;
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
    public class AdminController : JsonNetController
    {
        #region Fields
        private readonly IAdminService AdminService;
        private readonly ILogger Logger;
        #endregion

        #region Constructor
        public AdminController(IAdminService adminSvc, ILogger logger)
        {
            this.AdminService = adminSvc;
            this.Logger = logger;
        }
        #endregion

        [HttpPost]
        public ActionResult Add(AdminInfo model)
        {
            // 密碼加密
            model.Password = SecurityHelper.GetSHA256(model.Password);

            // 新增資料
            this.AdminService.Insert(model);
            return Json(true, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult Update(AdminInfo model)
        {

            // 更新資料
            this.AdminService.Update(model);
            return Json(true, JsonRequestBehavior.AllowGet);
        }

        public ActionResult Delete(string id)
        {
            AdminService.Delete(id);
            return Json(id, JsonRequestBehavior.AllowGet);
        }

        //[SiteMapCacheRelease]
        public ActionResult GetList(PaginationModel model)
        {
            var Identity = HttpContext.User.ToCustomPrincipal().CustomIdentity;
            return Json(AdminService.GetList(model, Identity), JsonRequestBehavior.AllowGet);
        }

        public ActionResult GetDetail(string id)
        {
            return Json(AdminService.GetDetail(id), JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult GetMenuByAdminID(string id)
        {
            return Json(AdminService.GetMenuByAdminID(id), JsonRequestBehavior.AllowGet);
        }


    }
}