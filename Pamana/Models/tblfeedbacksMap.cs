using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Web;

namespace Pamana.Models
{
    public class tblfeedbacksMap : EntityTypeConfiguration<tblfeedbacksModel>
    {
        public tblfeedbacksMap()
        {
            HasKey(x => x.feedbackID);
            ToTable("tblfeedbacks");
        }


    }
}