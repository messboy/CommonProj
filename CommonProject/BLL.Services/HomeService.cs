using BLL.Interfaces;
using Dao;
using Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;

namespace BLL.Services
{
    public class HomeService : IHomeService
    {
        private readonly CommonDBEntities db;
        public HomeService()
        {
            this.db = new CommonDBEntities();
        }

        public ContentInfo test()
        {
            var data = db.Content.AsNoTracking().Take(1).SingleOrDefault();
            var model = Mapper.Map<ContentInfo>(data);

            return model;
        }
    }
}
