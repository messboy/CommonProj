using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dao
{
    [MetadataType(typeof(KeywordMetadata))]
    public partial class Keyword
    {

        public class KeywordMetadata
        {

            [JsonIgnore]
            public virtual ICollection<Content> Content { get; set; }


        }
    }
}
