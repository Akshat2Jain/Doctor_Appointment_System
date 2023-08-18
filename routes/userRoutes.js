const express = require("express");
const {
  loginController,
  registerController,
  authController,
  applydoctorControlloer,
  getAllNotificationController,
  deleteAllNotificationController,
  getAllDoctorsController,
  bookeAppointmnetController,
  bookingAvailabilityController,
  userAppointmentsController,
} = require("../controllers/userCtrl");
const authMIddleware = require("../middleware/authMIddleware");

//router Object
const router = express.Router();

//Routes
//Login Route (Post)

router.post("/login", loginController);

//Register Route (Post)

router.post("/register", registerController);
// Auth || Post
router.post("/getUserData", authMIddleware, authController);

// Apply Doctor Post
router.post("/applydoctor", authMIddleware, applydoctorControlloer);

// get notifications
router.post(
  "/get-all-notification",
  authMIddleware,
  getAllNotificationController
);
// delete Notification
router.post(
  "/delete-all-notification",
  authMIddleware,
  deleteAllNotificationController
);

// get all doctors
router.get("/getallDoctors", authMIddleware, getAllDoctorsController);

//BOOK APPOINTMENT
router.post("/book-appointment", authMIddleware, bookeAppointmnetController);

// Book Availability
router.post(
  "/booking-availbility",
  authMIddleware,
  bookingAvailabilityController
);
//Appointments List
router.get("/user-appointments", authMIddleware, userAppointmentsController);

module.exports = router;
