using Dao;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Filter.Comparer
{
    public class MenuComparer : IEqualityComparer<Menu>
    {

        // ExhibitModel are equal if their names and ExhibitModel numbers are equal. 
        public bool Equals(Menu x, Menu y)
        {
            // Check whether the ExhibitModel' properties are equal. 
            return x.MenuID == y.MenuID;
        }

        public int GetHashCode(Menu obj)
        {
            return obj.Name.GetHashCode();
        }
    }
}
