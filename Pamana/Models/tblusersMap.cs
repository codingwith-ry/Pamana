using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Web;

namespace Pamana.Models
{
    public class tblusersMap : EntityTypeConfiguration<tblusersModel>
    {
        public tblusersMap()
        {
            HasKey(x => x.userID);
            ToTable("tblusers");
        }


    }
}