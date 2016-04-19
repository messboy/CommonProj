using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dao
{
    [MetadataType(typeof(ContentMetadata))]
    public partial class Content
    {
        public class ContentMetadata
        {
          
            [JsonIgnore]
            public virtual ICollection<FileUpload> FileUpload { get; set; }
            
            [JsonIgnore]
            public virtual ICollection<Keyword> Keyword { get; set; }

        }
    }
}
