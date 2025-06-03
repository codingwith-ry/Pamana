using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Pamana.Models
{
    public class tblfeedbacksModel
    {
        public int feedbackID { get; set; }
        public int userID { get; set; }

        public string feedbackHeader { get; set; }

        public string feedbackDesc { get; set; }

        public string feedbackRating { get; set; }
    }
}