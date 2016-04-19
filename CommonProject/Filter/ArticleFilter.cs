using Dao;
using Dao.Constants;
using LinqKit;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using Utility.Extensions.Pagination;

namespace Filter
{
    public class ArticleFilter
    {
        public static Expression<Func<Content, bool>> SearchFilter(PaginationModel model)
        {
            // 搜尋條件 :
            var filter = PredicateBuilder.True<Content>();
            filter = filter.And(c => c.ContentType.Contains(ContentType.ARTICLE));

            switch (model.SearchField)
            {
                case "id":
                    filter = filter.And(c => c.ContentID.Contains(model.SearchValue));
                    break;
                case "title":
                    filter = filter.And(c => c.Title.Contains(model.SearchValue));
                    break;
                case "description":
                    filter = filter.And(c => c.Description.Contains(model.SearchValue));
                    break;
                default:
                    break;
            }

            return filter;
        }
    }
}
