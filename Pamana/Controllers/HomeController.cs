using Pamana.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Data.Entity.Migrations;

namespace Pamana.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            return View();
        }

        public ActionResult ReserveNow()
        {
            return View();
        }

        public ActionResult Login()
        {
            return View();
        }

        public ActionResult Forgotpass()
        {
            return View();
        }

        public ActionResult Entercode()
        {
            return View();
        }

        public ActionResult Changepass()
        {
            return View();
        }

        public ActionResult Signup()
        {
            return View();
        }
        public ActionResult LoginIndex()
        {
            return View();
        }

        public ActionResult LoginAbout()
        {
            return View();
        }

        public ActionResult LoginReserve()
        {
            return View();
        }
        public ActionResult Account()
        {
            return View();
        }
        public ActionResult Announcements()
        {
            return View();
        }
        public ActionResult Reservations()
        {
            return View();
        }
        public ActionResult History()
        {
            return View();
        }

        public ActionResult EditProfile()
        {
            return View();
        }

        public ActionResult Dashboard()
        {
            return View();
        }

        public ActionResult AdminReservations()
        {
            return View();
        }

        public ActionResult AdminAnnouncements()
        {
            return View();
        }

        public ActionResult AdminFeedbacks()
        {
            return View();
        }

        public ActionResult AdminProfile()
        {
            return View();
        }
        public ActionResult AdminLogin()
        {
            return View();
        }
        public ActionResult ForgotPass()
        {
            return View();
        }
        public ActionResult ResetPass()
        {
            return View();
        }
        public ActionResult OTP()
        {
            return View();
        }

        public void AddUser(SignupModel user)
        {
            using (var db = new PamanaContext())
            {
                var userData = new tblusersModel
                {
                    userFName = user.firstName,
                    userLName = user.lastName,
                    userPhone = user.phoneNum,
                    userEmail = user.email,
                    userPass = user.password,
                    userRole = "user"
                };
                db.tblusers.AddOrUpdate(userData);
                db.SaveChanges();
            }
        }

        public void AddReservation(ReservationModel reservation)
        {
            using (var db = new PamanaContext())
            {
                var reservationData = new tblreservationsModel
                {
                    userID = reservation.userID,
                    reservationDate = reservation.date,
                    reservationTime = reservation.time,
                    reservationPeople = reservation.people
                };

                db.tblreservations.AddOrUpdate(reservationData);
                db.SaveChanges();
            }
        }
        public JsonResult GetUsers()
        {
            using (var db = new PamanaContext())
            {
                var users = db.tblusers.ToList();
                return Json(users, JsonRequestBehavior.AllowGet);
            }
        }

        public JsonResult GetReservations()
        {
            using (var db = new PamanaContext())
            {
                var users = db.tblreservations.ToList();
                return Json(users, JsonRequestBehavior.AllowGet);
            }
        }

        public JsonResult GetRelatedReservations(int userID)
        {
            using (var db = new PamanaContext())
            {
                var reservations = db.tblreservations.Where(u => u.userID == userID && u.reservationStatus == null).Select(u => new ReservationViewModel
                {
                    reservationID = u.reservationID,
                    userID = u.userID,
                    reservationDate = u.reservationDate,
                    reservationTime = u.reservationTime,
                    reservationPeople = u.reservationPeople,
                    reservationStatus = u.reservationStatus
                }).ToList();

                return Json(reservations, JsonRequestBehavior.AllowGet);
            }
        }

        public JsonResult GetCancelledReservations(int userID)
        {
            using (var db = new PamanaContext())
            {
                var reservations = db.tblreservations.Where(u => u.userID == userID && (u.reservationStatus == "Cancelled" || u.reservationStatus == "Successful")).Select(u => new ReservationViewModel
                {
                    reservationID = u.reservationID,
                    userID = u.userID,
                    reservationDate = u.reservationDate,
                    reservationTime = u.reservationTime,
                    reservationPeople = u.reservationPeople,
                    reservationStatus = u.reservationStatus
                }).ToList();

                return Json(reservations, JsonRequestBehavior.AllowGet);
            }
        }
        public JsonResult CancelReservation(int reservationID)
        {
            using (var db = new PamanaContext())
            {
                var reservation = db.tblreservations.Find(reservationID);
                if (reservation != null)
                {
                    reservation.reservationStatus = "Cancelled";
                    db.tblreservations.AddOrUpdate(reservation);
                    db.SaveChanges();
                    return Json(new
                    {
                        success = true
                    });
                }
                return Json(new { success = false, message = "Reservation not found." });
            }
        }
    }   
}
