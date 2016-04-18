using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Mvc;
using System.Web.Routing;
using Utility.Logging;

namespace Utility.Extensions.ErrorHandler
{
    /// <summary>
    /// catch controller內的所有錯誤, return json
    /// </summary>
    public class ExceptionHandler : FilterAttribute, IExceptionFilter
    {
        public ILogger Logger { get; set; }

        public ExceptionHandler(ILogger logger)
        {
            this.Logger = logger;
        }

        public void OnException(ExceptionContext filterContext)
        {
            //If the exeption is already handled we do nothing
            if (filterContext.ExceptionHandled)
            {
                return;
            }
            else
            {
                //Determine the return type of the action
                string actionName = filterContext.RouteData.Values["action"].ToString();
                Type controllerType = filterContext.Controller.GetType();
                var method = controllerType.GetMethod(actionName);
                var returnType = method.ReturnType;

                //If the action that generated the exception returns a view
                //Thank you Sumesh for the comment
                if (returnType.Equals(typeof(ActionResult))
                    || (returnType).IsSubclassOf(typeof(ActionResult)))
                {
                    filterContext.HttpContext.Response.StatusCode = 500;
                    //Make sure that we mark the exception as handled
                    filterContext.ExceptionHandled = true;

                    filterContext.Result = new JsonResult()
                    {
                        Data = filterContext.Exception,
                        JsonRequestBehavior = JsonRequestBehavior.AllowGet
                    };
                }
                Logger.Debug(filterContext.Exception.Message);
            }
        }
    }
}
