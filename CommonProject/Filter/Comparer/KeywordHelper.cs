using Dao;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Filter.Comparer
{
    public class KeywordHelper
    {
        public static List<Keyword> KeywordChecking(List<Keyword> keywords, List<Keyword> comparer)
        {
            if (keywords == null) return null;
            for (int i = 0; i < keywords.Count; i++)
            {
                // 防呆
                if (string.IsNullOrEmpty(keywords[i].Name))
                {
                    keywords[i] = null;
                }
                // 已存在關鍵字
                else if (comparer.Contains(keywords[i], new KeywordComparer()))
                {
                    keywords[i] = comparer.Where(x => x.Name == keywords[i].Name).FirstOrDefault();
                }
            }

            return keywords;
        }
    }
}
