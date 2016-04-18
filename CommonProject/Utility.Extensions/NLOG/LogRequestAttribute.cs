using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Mvc;
using Utility.Logging;


namespace Utility.Extensions.NLOG
{
    /// <summary>
    /// (目前不使用)攔截各action 並利用Nlog記錄到DB
    /// </summary>
    public class LogRequestAttribute : ActionFilterAttribute
    {
        public ILogger Logger { get; set; }

        public LogRequestAttribute(ILogger logger)
        {
            this.Logger = logger;
        }

        // 執行action前
        public override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            var formData = JsonConvert.SerializeObject(filterContext.ActionParameters);

            //this.Logger.Trace(string.Format("OnActionExcuting | {0} ", formData));
        }

        // 執行action後
        public override void OnActionExecuted(ActionExecutedContext filterContext)
        {
            var result = string.Empty;
            if (filterContext.Result is JsonResult)
            {
                result = JsonConvert.SerializeObject((filterContext.Result as JsonResult).Data);
            }

            if (filterContext.Exception != null)
            {
                result = filterContext.Exception.Message;
            }

            if (!string.IsNullOrEmpty(result))
            {
                // 防呆
                result = (result.Length > 2000) ? result.Substring(0, 2000) : result;
                //this.Logger.Trace(string.Format("{0} ", result));
            }
        }
    }        
}
