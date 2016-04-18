using Castle.DynamicProxy;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Web;
using System.Web.SessionState;
using Utility.Logging;

namespace Utility.Extensions.NLOG
{
    /// <summary>
    /// 記錄後台操作行為至db : backendlog
    /// </summary>
    public class BackendLogInterceptor : IInterceptor
    {
        public ILogger Logger { get; set; }

        public BackendLogInterceptor(ILogger logger)
        {
            this.Logger = logger;
        }

        public void Intercept(IInvocation invocation)
        {
            invocation.Proceed();

            // 只記錄新刪修動作
            //if (AllowCreateDeleteUpdateAction(invocation.Method.Name))
            //{
            //    this.Logger.Info("{0}", JsonConvert.SerializeObject(invocation.ReturnValue));
            //}
        }

        private static bool AllowCreateDeleteUpdateAction(string action)
        {
            return action.ToLower().Contains("insert") || action.ToLower().Contains("update") || action.ToLower().Contains("delete");
        }
    }    
}
