using AutoMapper;
using BLL.Interfaces;
using Dao;
using Filter.Comparer;
using Model.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data.Entity;
using System.Threading.Tasks;
using Utility.Extensions.Pagination;
using Utility.Extensions.Security;
using LinqKit;
using Filter;

namespace BLL.Services
{
    public class ArticleService : IArticleService
    {
        private readonly CommonDBEntities db;
        public ArticleService()
        {
            this.db = new CommonDBEntities();
        }

        public Dao.Content Insert(ArticleViewModel InsertViewModel)
        {
            // 關鍵字比對
            InsertViewModel.Keyword = KeywordHelper.KeywordChecking(InsertViewModel.Keyword, db.Keyword.ToList());
            var model = Mapper.Map<Content>(InsertViewModel);

            db.Content.Add(model);
            db.SaveChanges();

            return model;
        }

        public Dao.Content Update(ArticleViewModel updateViewModel)
        {
            var model = db.Content.Find(updateViewModel.ContentID);
            // 關鍵字比對
            updateViewModel.Keyword = KeywordHelper.KeywordChecking(updateViewModel.Keyword, db.Keyword.ToList());

            Mapper.Map(updateViewModel, model);
            db.SaveChanges();

            return model;
        }

        public Dao.Content Delete(string id)
        {
            var deleteModel = db.Content.Find(id);
            deleteModel.Keyword.ToList().ForEach(c => deleteModel.Keyword.Remove(c));
            db.Content.Remove(deleteModel);
            db.SaveChanges();

            return deleteModel;
        }

        public List<ArticleViewModel> GetList(PaginationModel pagination, CustomIdentity identity)
        {
            // 搜尋
            var query = db.Content.AsNoTracking().AsExpandable()
                .Where(ArticleFilter.SearchFilter(pagination));

            // 總數 
            var count = query.Count();

            // 排序 分頁 
            var data = query
                .DynamicOrderBy(pagination)
                .PaginateBy(pagination)
                .ToList();

            // 映射
            var result = Mapper.Map<List<ArticleViewModel>>(data);
            if (count != 0) result[0].TotalCount = count;

            return result;
        }

        public ArticleViewModel GetDetail(string id)
        {
            var detail = db.Content.AsNoTracking()
              .Include(c => c.Keyword)
              .Where(c => c.ContentID.Equals(id))
              .SingleOrDefault();


            var result = Mapper.Map<ArticleViewModel>(detail);
            return result;
        }
    }
}
