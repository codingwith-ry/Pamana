using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Pamana.Models
{
    public class ReservationViewModel
    {
        public int reservationID { get; set; }
        public int userID { get; set; }
        public string reservationDate { get; set; }
        public string reservationTime { get; set; }
        public int reservationPeople { get; set; }
        public string reservationStatus { get; set; }
    }

}