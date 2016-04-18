using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Utility.Extensions.Pagination
{
    public static class PagnationFilterExtensions
    {
        /// <summary>
        /// 分頁 - 分頁前務必先orderby
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="entity"></param>
        /// <param name="p"></param>
        /// <returns></returns>
        public static IQueryable<T> PaginateBy<T>(this IQueryable<T> entity, PaginationModel p)
        {
            return entity
                .Skip(p.Start)
                .Take(p.Number);
        }

        //private static Expression<Func<Content, bool>> PostedOnOrAfter(paginationModel cutoffDate)
        //{
        //    return post => post.Museum == "測試";
        //}

        
    }
}
