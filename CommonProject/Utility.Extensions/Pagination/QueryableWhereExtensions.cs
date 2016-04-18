using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Utility.Extensions.Pagination
{
    public static class QueryableWhereExtensions
    {
       // example
       // var customersQuery = salesContext.Customers
       //.Where(request.Name, c => c.Name.Contains(request.Name))
       //.Where(request.Country, c => c.Country.Equals(request.Country));

        // Where extension for filters of any nullable type
        public static IQueryable<TSource> Where<TSource, TFilter>(this IQueryable<TSource> source,
            TFilter? filter, Expression<Func<TSource, bool>> predicate) where TFilter : struct
        {
            if (filter.HasValue)
            {
                source = source.Where(predicate);
            }

            return source;
        }

        // Where extension for string filters
        public static IQueryable<TSource> Where<TSource>(this IQueryable<TSource> source,
            string filter, Expression<Func<TSource, bool>> predicate)
        {
            if (!string.IsNullOrWhiteSpace(filter))
            {
                source = source.Where(predicate);
            }

            return source;
        }

        // Where extension for collection filters
        public static IQueryable<TSource> Where<TSource, TFilter>(this IQueryable<TSource> source,
            IEnumerable<TFilter> filter, Expression<Func<TSource, bool>> predicate)
        {
            if (filter != null && filter.Any())
            {
                source = source.Where(predicate);
            }

            return source;
        }

    }
}
