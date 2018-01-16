using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using MySite.Models;
using System.Net.Mail;
using System.Net;
using System.Text;

namespace MySite.Controllers
{
    public class FeedbackController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        private readonly IOptions<SendOptions> opts;
        public FeedbackController(IOptions<SendOptions> send)
        {
            opts = send;
        }

        public IActionResult Send(FeedbackFormModel feedbackFormModel)
        {
            string address = opts.Value.address;
            string password = opts.Value.password;
            string server = opts.Value.server;
            int port = opts.Value.port;

            SmtpClient cli = new SmtpClient(server, port);
            cli.EnableSsl = true;
            cli.DeliveryMethod = SmtpDeliveryMethod.Network;
            cli.Credentials = new NetworkCredential(address, password);
            MailAddress from = new MailAddress(address, feedbackFormModel.email);
            MailMessage mess = new MailMessage(address, address, feedbackFormModel.theme, feedbackFormModel.message);
            mess.From = from;
            mess.SubjectEncoding = Encoding.UTF8;
            mess.BodyEncoding = Encoding.UTF8;
            try
            {
                cli.Send(mess);
            }
            catch (Exception)
            {
            }
            mess.Dispose();
            return RedirectToAction("Index");
        }
    }
}