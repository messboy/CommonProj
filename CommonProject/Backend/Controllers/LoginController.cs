using Backend.Security;
using BLL.Interfaces;
using Model.ViewModel;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;
using Utility.Extensions.JsonNet;
using Utility.Extensions.Net;
using Utility.Extensions.Security;
using Utility.Logging;

namespace Backend.Controllers
{
    public class LoginController : JsonNetController
    {
        private readonly IAdminService AdminService;
        public ILogger Logger { get; set; }


        public LoginController(IAdminService adminSvc, ILogger logger)
        {
            this.AdminService = adminSvc;
            this.Logger = logger;

        }

        [AllowAnonymous]
        public ActionResult Login()
        {
            if (User.Identity.IsAuthenticated)
            {
                return LogOff();
            }

            return new HttpStatusCodeResult(HttpStatusCode.BadRequest, JsonConvert.SerializeObject(this.ModelState));
        } // Login()

        [HttpPost]
        [AllowAnonymous]
        public ActionResult Login(LoginViewModel model)
        {
            if (ModelState.IsValid)
            {
                model.Password = SecurityHelper.GetSHA256(model.Password);

                // 表單驗證
                if (Membership.ValidateUser(model.Account, model.Password))
                {
                    var ip = System.Web.HttpContext.Current.Request.UserHostAddress;

                    // 通過設定權限
                    FormsAuthentication.SetAuthCookie(model.Account, false);
                    AdminService.ModifyLastLoginTime(model.Account, NetWorkHelper.GetIP4Address());

                    // 回傳該權限資訊
                    return Json(AdminService.GetAuth(model.Account), JsonRequestBehavior.AllowGet);
                }

                ModelState.AddModelError("LogOnError", "The user name or password provided is incorrect.");
            }
            return new HttpStatusCodeResult(HttpStatusCode.BadRequest, JsonConvert.SerializeObject(this.ModelState));
        } // Login()

        [HttpPost]
        public ActionResult LogOff()
        {
            FormsAuthentication.SignOut();
            return new HttpStatusCodeResult(HttpStatusCode.Created, "true");
        } // LogOff()




    }
}