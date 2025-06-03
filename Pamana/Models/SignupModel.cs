using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Pamana.Models
{
    public class SignupModel
    {
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string phoneNum { get; set; }
        
        public string email { get; set; }

        public string password { get; set; }


    }
}