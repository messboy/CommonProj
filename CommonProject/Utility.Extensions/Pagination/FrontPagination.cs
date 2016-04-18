using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Utility.Extensions.Pagination
{
    public class FrontPagination : PaginationModel
    {
     
        // 自訂進階搜尋條件
        public List<string> Grades { get; set; }
        public List<string> Subjects { get; set; }
        public List<string> Museums { get; set; }
        public List<string> Rights { get; set; }
        public List<string> ResourceTypes { get; set; }
        public List<string> ContentTypes { get; set; }
        public List<string> Categorys { get; set; }     //最新活動用
        public string Keyword { get; set; }

        // 參觀介紹搜尋條件
        public string Museum { get; set; }

        // 要求資訊
        public string SessionID { get; set; }
        public string IP { get; set; }
        public string BrowserVersion { get; set; }

        // 文創商品進階搜尋
        public string Category { get; set; }
        public int PriceOption { get; set; }    // 0:全部  1 : 199以下  2: 200~499  3: 500~799 4.800以上
        

        // App進階搜尋
        public int OSOption { get; set; }  // 0:全部  1:安卓  2.IOS 3.both

    }
}
