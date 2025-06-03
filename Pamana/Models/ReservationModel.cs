using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Pamana.Models
{
    public class ReservationModel
    {
        public int userID { get; set; }
        public string date { get; set; }
        public string time { get; set; }
        public int people { get; set; }
        
    }
}