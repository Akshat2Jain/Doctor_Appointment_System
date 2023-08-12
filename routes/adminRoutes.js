const express = require("express");
const {
  getAllUsersController,
  getAllDoctorsController,
  changeAccountStatusController,
} = require("../controllers/adminCtrl");
const authMIddleware = require("../middleware/authMIddleware");

const router = express.Router();

//GET METHOD || USERS
router.get("/getAllUsers", authMIddleware, getAllUsersController);

//GET METHOD || DOCTORS
router.get("/getAllDoctors", authMIddleware, getAllDoctorsController);

//POST ACCOUNT STATUS
router.post(
  "/changeAccountStatus",
  authMIddleware,
  changeAccountStatusController
);

module.exports = router;
