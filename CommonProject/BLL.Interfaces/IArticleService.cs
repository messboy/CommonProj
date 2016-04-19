using Dao;
using Model.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Utility.Extensions.Pagination;
using Utility.Extensions.Security;

namespace BLL.Interfaces
{
    public interface IArticleService
    {
        Content Insert(ArticleViewModel model);
        Content Update(ArticleViewModel model);
        Content Delete(string id);
        List<ArticleViewModel> GetList(PaginationModel paginationModel, CustomIdentity identity);

        ArticleViewModel GetDetail(string id);
    }
}
