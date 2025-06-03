using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Web;

namespace Pamana.Models
{
    public class tblreservationsMap : EntityTypeConfiguration<tblreservationsModel>
    {
        public tblreservationsMap()
        {
            HasKey(x => x.reservationID);
            ToTable("tblreservations");
        }


    }
}