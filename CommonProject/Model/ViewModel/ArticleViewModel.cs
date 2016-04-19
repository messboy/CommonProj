using Dao;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model.ViewModel
{
    public class ArticleViewModel : BaseModel
    {
        public string ContentID { get; set; }
        public string ContentType { get; set; }
        public string Category { get; set; }
        [Required]
        public string Title { get; set; }
        public string Description { get; set; }
        public string Language { get; set; }
        [Required]
        public string Rights { get; set; }
        [Required]
        public string ResourceLink { get; set; }
        public string CoverImage { get; set; }
        public string ResourceType { get; set; }
        public string RelatedReSource { get; set; }
        public Nullable<System.DateTime> PublishDate { get; set; }
        public bool IsOuterCoverImage { get; set; }
        public bool IsPublish { get; set; }
        public string CreatedBy { get; set; }
        public string ModifiedBy { get; set; }
        public System.DateTime CreateTime { get; set; }
        public System.DateTime ModifiedTime { get; set; }

        public List<Keyword> Keyword { get; set; }

        public string Note { get; set; }
    }
}
