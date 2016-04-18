using LinqKit;
using Utility.Extensions.Security;
using Dao;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using Utility.Extensions.Pagination;


namespace Filter
{
    public class AdminFilter
    {
        public static Expression<Func<Admin, bool>> SearchFilter(PaginationModel model)
        {
            // 搜尋條件 :
            var filter = PredicateBuilder.True<Admin>();

            switch (model.SearchField)
            {
                case "Account":
                    filter = filter.And(c => c.Account.Contains(model.SearchValue));
                    break;
                case "Name":
                    filter = filter.And(c => c.Name.Contains(model.SearchValue));
                    break;
                case "Tel":
                    filter = filter.And(c => c.Tel.Contains(model.SearchValue));
                    break;
                case "Email":
                    filter = filter.And(c => c.Email.Contains(model.SearchValue));
                    break;
                default:
                    break;
            }
            return filter;
        }

        // 權限過濾
        public static Expression<Func<Admin, bool>> AuthorityFilter(CustomIdentity identity)
        {
            Expression<Func<Admin, bool>> filter = p => false;
            if (identity != null)
            {
                // 不能撈比自己權限高的帳號
                filter = p => p.Role >= identity.Role;
            }

            return filter;
        }

       
    }
}
