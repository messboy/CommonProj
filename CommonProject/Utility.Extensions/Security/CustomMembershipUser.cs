using Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Security;


namespace Utility.Extensions.Security
{
    public class CustomMembershipUser : MembershipUser
    {
        #region Properties
        public string UserID { get; set; }
        public string UserName { get; set; }
        public int? Role { get; set; }
        public string Museum { get; set; }

        #endregion

        // 自訂權限的資訊
        public CustomMembershipUser(AdminInfo user)
            : base("CustomMembershipProvider", user.Account, user.ID, user.Email, string.Empty, string.Empty, true, false, DateTime.Now, DateTime.Now, DateTime.Now, DateTime.Now, DateTime.Now)
        {
            UserID = user.ID;
            UserName = user.Name;
            Role = user.Role;
        }

    }
}
