using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MySite.Models
{
    public class FeedbackFormModel
    {

        [EmailAddress]
        [Required]
        public string email { get; set; }

        [StringLength(50)]
        public string theme { get; set; }

        [StringLength(2000)]
        [Required]
        public string message { get; set; }
    }

    public class SendOptions
    {
        public string address { get; set; }
        public string password { get; set; }
        public string server { get; set; }
        public int port { get; set; }

    }
}
