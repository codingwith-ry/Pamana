using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Web;

namespace Pamana.Models
{
    public class tblannouncementsMap : EntityTypeConfiguration<tblannouncementsModel>
    {
        public tblannouncementsMap()
        {
            HasKey(x => x.announcementID);
            ToTable("tblannouncements");
        }


    }
}