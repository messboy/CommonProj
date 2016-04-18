using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Utility.Extensions.Pagination
{
    public class PaginationModel
    {
        public PaginationModel() {}

        public PaginationModel(string Type, DateTime? BeginTime, DateTime? EndTime)
        {
            // TODO: Complete member initialization
            this.Type = Type;
            this.BeginTime = BeginTime;
            this.EndTime = EndTime;
        }
        //分頁
        public int Start { get; set; }
        public int Number { get; set; }
        public string TotalItemCount { get; set; }

        //搜尋
        public DateTime? BeginTime { get; set; }
        public DateTime? EndTime { get; set; }

        public DateTime BeginDate 
        {
            get
            {
                if (!string.IsNullOrEmpty(Year) && !string.IsNullOrEmpty(Month))
                {
                    DateTime startDate = Convert.ToDateTime(string.Format("{0}/{1}/01", Year, Month));
                    return startDate;
                }
                return DateTime.Now;
            }
        }

        public DateTime EndDate
        {
            get
            {
                if (!string.IsNullOrEmpty(Year) && !string.IsNullOrEmpty(Month))
                {
                    var date = Convert.ToDateTime(string.Format("{0}/{1}/01", Year, Month));
                    DateTime endDate = date.AddMonths(1).AddDays(-1);   //月初1號減一天=本月底
                    return endDate;
                }
                return DateTime.Now;
            }
        }

        public string Year { get; set; }
        public string Month { get; set; }
        public string SearchField { get; set; }
        public string SearchValue { get; set; }

        //排序
        private string _sortname;
        public string SortName { 
            get
            {
                return _sortname;
            } 
            set
            {
                _sortname = value;
            }   
        }
        public bool? IsDescending { get; set; }   //是否降冪排序

        //Type
        public string Type { get; set; }

        // 分頁相關
        public int PageStart { 
            get{
                if (this.Number != 0)
                {
                    return (this.Start / this.Number) + 1; 
                }
                return 1;
            } 
        }

        public string PageOrder
        {
            get
            {
                return (this.IsDescending == false) ? "asc" : "desc";
            }
        }
    }
}