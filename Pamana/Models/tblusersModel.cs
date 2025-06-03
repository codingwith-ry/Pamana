using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Pamana.Models
{
    public class tblusersModel
    {
        public int userID { get; set; }
        public string userFName { get; set; }
        public string userLName { get; set; }
        public string userEmail { get; set; }
        public string userPass { get; set; }
        public string userPhone { get; set; }
        public string userRole { get; set; }
        public string userImage { get; set; }
    }
}