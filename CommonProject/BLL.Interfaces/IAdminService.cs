using Utility.Extensions.Pagination;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using Dao;
using Model;
using Utility.Extensions.Security;

namespace BLL.Interfaces
{
    public interface IAdminService
    {
        Admin Insert(AdminInfo model);
        Admin Update(AdminInfo model);
        Admin Delete(string id);

        List<AdminInfo> GetAll();
        List<AdminInfo> GetList(PaginationModel paginationModel, CustomIdentity identity);

        AdminInfo GetDetail(string id);

        List<Menu> GetMenuByAdminID(string adminId);

        List<Menu> GetAllMenu();

        AuthInfo GetAuth(string account);

        void ModifyLastLoginTime(string account, string ip);
    }
}
