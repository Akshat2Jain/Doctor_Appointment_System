const express = require("express");
const {
  loginController,
  registerController,
  authController,
  applydoctorControlloer,
  getAllNotificationController,
  deleteAllNotificationController,
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

router.post(
  "/delete-all-notification",
  authMIddleware,
  deleteAllNotificationController
);

module.exports = router;
