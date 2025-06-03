using System;
using System.Collections.Generic;
using System.Linq;
using System.Data.Entity;
using System.Web;

using MySql.Data.EntityFramework;

namespace Pamana.Models
{
    [DbConfigurationType(typeof(MySqlEFConfiguration))]
    public class PamanaContext : DbContext
    {
        static PamanaContext()
        {
            Database.SetInitializer<PamanaContext>(null);
        }

        public PamanaContext() : base("Name=pamanadb")
        { // Database

        }

        // Data Tables
        public virtual DbSet<tblusersModel> tblusers { get; set; }
        public virtual DbSet<tblannouncementsModel> tblannouncements { get; set; }
        public virtual DbSet<tblfeedbacksModel> tblfeedbacks { get; set; }
        public virtual DbSet<tblreservationsModel> tblreservations { get; set; }

        protected override void OnModelCreating(DbModelBuilder dbModelBuilder)
        {
            base.OnModelCreating(dbModelBuilder);
            dbModelBuilder.Configurations.Add(new tblusersMap());
            dbModelBuilder.Configurations.Add(new tblannouncementsMap());
            dbModelBuilder.Configurations.Add(new tblfeedbacksMap());
            dbModelBuilder.Configurations.Add(new tblreservationsMap());
        }

    }
}