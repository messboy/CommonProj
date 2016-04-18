using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model
{
    public class AuthInfo
    {
        public string ID { get; set; }
        public bool Authenticated { get; set; }

        public string UserName { get; set; }

        public int Role { get; set; }
    }
}
