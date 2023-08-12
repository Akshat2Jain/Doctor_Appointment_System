const express = require("express");
const {
  getDoctorInfoController,
  updateProfileController,
  getDoctorByIdController,
} = require("../controllers/doctorCtrl");
const authMIddleware = require("../middleware/authMIddleware");
const router = express.Router();

//POST SINGLE DOC INFO
router.post("/getDoctorInfo", authMIddleware, getDoctorInfoController);

//POST UPDATE PROFILE
router.post("/updateProfile", authMIddleware, updateProfileController);

//POST  GET SINGLE DOC INFO
router.post("/getDoctorById", authMIddleware, getDoctorByIdController);

module.exports = router;
