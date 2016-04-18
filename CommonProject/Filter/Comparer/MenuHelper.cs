using Dao;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Filter.Comparer
{
    public class MenuHelper
    {
        public static List<Menu> MenuTracing(List<Menu> menus, List<Menu> comparer)
        {
            for (int i = 0; i < menus.Count; i++)
            {
                // 防呆
                if (string.IsNullOrEmpty(menus[i].Name))
                {
                    menus[i] = null;
                }
                // 已存在關鍵字
                else if (comparer.Contains(menus[i], new MenuComparer()))
                {
                    menus[i] = comparer.Where(x => x.MenuID == menus[i].MenuID).SingleOrDefault();
                }
            }

            return menus;
        }
    }
}
