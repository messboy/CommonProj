using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model
{
    public class ContentInfo
    {
        public string ContentID { get; set; }
        public string ContentType { get; set; }
        public string Indentifier { get; set; }
        public string Category { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Language { get; set; }
        public string Rights { get; set; }
        public string ResourceLink { get; set; }
        public string CoverImage { get; set; }
        public bool IsOuterCoverImage { get; set; }
        public string ResourceType { get; set; }
        public byte GradeLevel { get; set; }
        public string RelatedReSource { get; set; }
        public Nullable<System.DateTime> PublishDate { get; set; }
        public string Publisher { get; set; }
        public int Cost { get; set; }
        public string Note { get; set; }
        public bool IsPublish { get; set; }
        public long ClickCount { get; set; }
        public System.DateTime CreateTime { get; set; }
        public string CreatedBy { get; set; }
        public System.DateTime ModifiedTime { get; set; }
        public string ModifiedBy { get; set; }
    }
}
