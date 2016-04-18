using Dao;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model
{
    public class AdminInfo
    {
        public string ID { get; set; }
        public string Account { get; set; }
        public string Password { get; set; }
        public int Role { get; set; }
        public string Name { get; set; }
        public string Tel { get; set; }
        public string Email { get; set; }
        public string Mobile { get; set; }
        public bool Enable { get; set; }
        public System.DateTime CreateTime { get; set; }
        public string Creator { get; set; }
        public System.DateTime ModifiedTime { get; set; }
        public string ModifiedBy { get; set; }
        public string LastLogonIP { get; set; }
        public Nullable<System.DateTime> LastLogonTime { get; set; }
        public List<Menu> Menu { get; set; }
    }
}
