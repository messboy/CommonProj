using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using System.Security.Principal;
using Dao.Constants;

namespace Dao
{
    public partial class CommonDBEntities : DbContext
    {
        /// <summary>
        /// 進資料庫前攔截
        /// </summary>
        /// <returns></returns>
        public override int SaveChanges()
        {
            var entities = this.ChangeTracker.Entries();
            IPrincipal user = null;
            try
            {
                user = System.Web.HttpContext.Current.User;
            }
            catch (Exception) { }// 多執行緒

            foreach (var entry in entities)
            {
                var fullName = entry.Entity.GetType().FullName;

                // 更新
                if (entry.State == EntityState.Modified)
                {
                    // 設定系統預設值
                    var modifiedBy = (user != null && user.Identity.Name != null) ? user.Identity.Name : Constant.SYSTEM;

                    entry.CurrentValues.SetValues(new
                    {
                        ModifiedTime = DateTime.Now,
                        ModifiedBy = modifiedBy,
                    });
                }

                // 新增
                if (entry.State == EntityState.Added)
                {
                    // 設定系統預設值
                    var createdBy = (user != null && user.Identity.Name != null) ? user.Identity.Name : Constant.SYSTEM;
                    var modifiedBy = (user != null && user.Identity.Name != null) ? user.Identity.Name : Constant.SYSTEM;

                    entry.CurrentValues.SetValues(new
                    {
                        ModifiedTime = DateTime.Now,
                        LatestLogin = DateTime.Now,
                        Creator = createdBy,
                        CreatedBy = createdBy,
                        ModifiedBy = modifiedBy
                    });
                }
            }

            return base.SaveChanges();
        }

    }
}
