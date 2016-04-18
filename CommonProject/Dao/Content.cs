//------------------------------------------------------------------------------
// <auto-generated>
//     這個程式碼是由範本產生。
//
//     對這個檔案進行手動變更可能導致您的應用程式產生未預期的行為。
//     如果重新產生程式碼，將會覆寫對這個檔案的手動變更。
// </auto-generated>
//------------------------------------------------------------------------------

namespace Dao
{
    using System;
    using System.Collections.Generic;
    
    public partial class Content
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Content()
        {
            this.FileUpload = new HashSet<FileUpload>();
            this.Keyword = new HashSet<Keyword>();
        }
    
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
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<FileUpload> FileUpload { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Keyword> Keyword { get; set; }
    }
}
