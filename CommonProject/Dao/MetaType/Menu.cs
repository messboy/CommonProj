using Dao;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dao
{
    [MetadataType(typeof(MenuMetadata))]
    public partial class Menu
    {
        public class MenuMetadata
        {

            [JsonIgnore]
            public virtual ICollection<Admin> Admin { get; set; }

        }

    }
}
