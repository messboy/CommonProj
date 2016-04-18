using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Utility.Extensions.Pagination
{
    public static class QueryableOrderByExtensions
    {
        /// <summary>
        /// 動態選擇排序－遇到nullable型別會掛掉
        /// 主要用到IsDescending, SortName兩個屬性
        /// </summary>
        /// <typeparam name="TSource"></typeparam>
        /// <param name="source"></param>
        /// <param name="p"></param>
        /// <returns></returns>
        public static IQueryable<TSource> DynamicOrderBy<TSource>(this IQueryable<TSource> source, PaginationModel p)
        {
            var type = typeof(TSource);
            var parameter = Expression.Parameter(type, "x");
            bool isDescending = p.IsDescending ?? true;   //預設為降冪排序
            MemberExpression propertyReference = null;
            try
            {
                propertyReference = Expression.Property(parameter, p.SortName ?? "ModifiedTime");
            }
            catch (Exception)
            {

                propertyReference = Expression.Property(parameter, p.SortName ?? "CreateTime");
            }

            // TODO 重構(cue:表示樹)
            if (!isDescending)
            {

                switch (propertyReference.Type.Name)
                {
                    case "String":
                        var orderExpression1 = Expression.Lambda<Func<TSource, object>>(propertyReference, new[] { parameter });
                        source = source.OrderBy(orderExpression1);
                        break;
                    case "DateTime":
                        var orderExpression2 = Expression.Lambda<Func<TSource, DateTime>>(propertyReference, new[] { parameter });
                        source = source.OrderBy(orderExpression2);
                        break;
                    case "Int32":
                        var orderExpression3 = Expression.Lambda<Func<TSource, int>>(propertyReference, new[] { parameter });
                        source = source.OrderBy(orderExpression3);
                        break;
                    case "Int64":
                        var orderExpression6 = Expression.Lambda<Func<TSource, Int64>>(propertyReference, new[] { parameter });
                        source = source.OrderBy(orderExpression6);
                        break;
                    case "Boolean":
                        var orderExpression4 = Expression.Lambda<Func<TSource, bool>>(propertyReference, new[] { parameter });
                        source = source.OrderBy(orderExpression4);
                        break;
                    default:
                        var orderExpression5 = Expression.Lambda<Func<TSource, object>>(propertyReference, new[] { parameter });
                        source = source.OrderBy(orderExpression5);
                        break;
                }

            }
            else
            {
                switch (propertyReference.Type.Name)
                {
                    case "String":
                        var orderExpression1 = Expression.Lambda<Func<TSource, object>>(propertyReference, new[] { parameter });
                        source = source.OrderByDescending(orderExpression1);
                        break;
                    case "DateTime":
                        var orderExpression2 = Expression.Lambda<Func<TSource, DateTime>>(propertyReference, new[] { parameter });
                        source = source.OrderByDescending(orderExpression2);
                        break;
                    case "Int32":
                        var orderExpression3 = Expression.Lambda<Func<TSource, int>>(propertyReference, new[] { parameter });
                        source = source.OrderByDescending(orderExpression3);
                        break;
                    case "Int64":
                        var orderExpression6 = Expression.Lambda<Func<TSource, Int64>>(propertyReference, new[] { parameter });
                        source = source.OrderBy(orderExpression6);
                        break;
                    case "Boolean":
                        var orderExpression4 = Expression.Lambda<Func<TSource, bool>>(propertyReference, new[] { parameter });
                        source = source.OrderByDescending(orderExpression4);
                        break;
                    default:
                        var orderExpression5 = Expression.Lambda<Func<TSource, object>>(propertyReference, new[] { parameter });
                        source = source.OrderByDescending(orderExpression5);
                        break;
                }

            }
           

            return source;

            //var sortExpression = Expression.Call(
            //    typeof(Queryable),
            //    "OrderBy",
            //    new Type[] { type },
            //    null,
            //    expression
            //    );
            //return source.Provider.CreateQuery<TSource>(sortExpression);

            //if (!string.IsNullOrEmpty(orderByField))
            //{
            //    // 產生Expression
            //    var param = Expression.Parameter(typeof(TSource), "x");
            //    Expression orderExpression = Expression.Lambda<Func<TSource, object>>(Expression.Property(param, orderByField), param);
            //    if (isAscending)
            //    {
            //        source = source.OrderBy(orderExpression);
            //    }
            //    else
            //    {
            //        source = source.OrderByDescending(orderExpression);
            //    }
            //}
            //return source;

            
        }

        // 遇到nullable型別用
        //private static MethodInfo orderbyInfo = null;
        //private static MethodInfo orderbyDecInfo = null;

        //public static IQueryable<T> OrderBy<T>(this IQueryable<T> query, string property) where T : class
        //{
        //    Type entityType = typeof(T);
        //    Type entityPropertyType = entityType.GetProperty(property).PropertyType;

        //    var orderPara = Expression.Parameter(entityType, "o");
        //    var orderExpr = Expression.Lambda(Expression.Property(orderPara, property), orderPara);

        //    if (orderbyInfo == null)
        //    {
        //        //因為呼叫OrderBy需要知道型別，不知道的情況下無法直接呼叫，所以用反射的方式呼叫
        //        //泛型的GetMethod很難，所以用GetMethods在用Linq取出Method，找到後快取。
        //        orderbyInfo = typeof(Queryable).GetMethods().Single(x => x.Name == "OrderBy" && x.GetParameters().Length == 2);
        //    }

        //    //因為是泛型Mehtod要呼叫MakeGenericMethod決定泛型型別
        //    return orderbyInfo.MakeGenericMethod(new Type[] { entityType, entityPropertyType }).Invoke(null, new object[] { query, orderExpr }) as IQueryable<T>;
        //}

        //public static IQueryable<T> OrderByDescending<T>(this IQueryable<T> query, string property)
        //{
        //    Type entityType = typeof(T);
        //    Type entityPropertyType = entityType.GetProperty(property).PropertyType;

        //    var orderPara = Expression.Parameter(entityType, "o");
        //    var orderExpr = Expression.Lambda(Expression.Property(orderPara, property), orderPara);

        //    if (orderbyDecInfo == null)
        //    {
        //        orderbyDecInfo = typeof(Queryable).GetMethods().Single(x => x.Name == "OrderByDescending" && x.GetParameters().Length == 2);
        //    }

        //    return orderbyDecInfo.MakeGenericMethod(new Type[] { entityType, entityPropertyType }).Invoke(null, new object[] { query, orderExpr }) as IQueryable<T>;
        //}

    }
}
