using Dao;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Filter.Comparer
{
    public class KeywordComparer : IEqualityComparer<Keyword>
    {

        // ExhibitModel are equal if their names and ExhibitModel numbers are equal. 
        public bool Equals(Keyword x, Keyword y)
        {
            // Check whether the ExhibitModel' properties are equal. 
            return x.Name == y.Name;
        }

        public int GetHashCode(Keyword obj)
        {
            return obj.Name.GetHashCode();
        }
    }
}
