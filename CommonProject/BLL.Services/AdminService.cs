using AutoMapper;
using BLL.Interfaces;
using Dao;
using Filter.Comparer;
using Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Utility.Extensions.Security;

namespace BLL.Services
{
    public class AdminService : IAdminService
    {
        private readonly CommonDBEntities db;
        public AdminService()
        {
            this.db = new CommonDBEntities();
        }

        public Admin Insert(Model.AdminInfo InsertViewModel)
        {
            // Menu追蹤
            InsertViewModel.Menu = MenuHelper.MenuTracing(InsertViewModel.Menu, db.Menu.ToList());
            var model = Mapper.Map<Admin>(InsertViewModel);

            db.Admin.Add(model);
            db.SaveChanges();

            return model;
        }

        public Admin Update(Model.AdminInfo updateViewModel)
        {
            // Menu追蹤
            updateViewModel.Menu = MenuHelper.MenuTracing(updateViewModel.Menu, db.Menu.ToList());
            var model = db.Admin.Find(updateViewModel.ID);
            // 如果密碼有改動,重新加密
            if (model.Password != updateViewModel.Password)
            {
                // 密碼加密
                updateViewModel.Password = SecurityHelper.GetSHA256(updateViewModel.Password);
            }
            Mapper.Map(updateViewModel, model);
            db.SaveChanges();

            return model;
        }

        public Admin Delete(string id)
        {
            var deleteModel = db.Admin.Find(id);
            deleteModel.Menu.ToList().ForEach(c => deleteModel.Menu.Remove(c));
            db.Admin.Remove(deleteModel);
            db.SaveChanges();

            return deleteModel;
        }

        public List<AdminInfo> GetAll()
        {
            var data = db.Admin.ToList();
            var result = Mapper.Map<List<AdminInfo>>(data);
            return result;
        }

        public AdminInfo GetDetail(string id)
        {
            var detail = db.Admin.AsNoTracking()
                //.Include(c => c.Menu)
                .Where(c => c.ID.Equals(id))
                .SingleOrDefault();

            // 映射
            var result = Mapper.Map<AdminInfo>(detail);
            return result;
        }

        public List<Dao.Menu> GetMenuByAdminID(string adminId)
        {
            var detail = db.Admin.AsNoTracking()
            //.Include(c => c.Menu)
            .Where(c => c.ID.Equals(adminId))
            .SingleOrDefault();

            // 映射
            var result = Mapper.Map<AdminInfo>(detail);
            return result.Menu;
        }

        public List<Dao.Menu> GetAllMenu()
        {
            throw new NotImplementedException();
        }

        public void ModifyLastLoginTime(string account, string ip)
        {
            var result = db.Admin.Where(c => c.Account == account).SingleOrDefault();
            // 驗證後修正最後登入時間
            result.LastLogonTime = DateTime.Now;
            result.LastLogonIP = ip;
            db.SaveChanges();
        }

        public AuthInfo GetAuth(string account)
        {
            AuthInfo result = db.Admin.Where(c => c.Account == account).Select(c => new AuthInfo
            {
                ID = c.ID,
                UserName = c.Account,
                Authenticated = true,
                Role = c.Role,
            }).SingleOrDefault();

            return result;
        }


        
    }
}
