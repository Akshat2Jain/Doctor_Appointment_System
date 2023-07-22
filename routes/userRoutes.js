const express = require("express");
const {
  loginController,
  registerController,
  authController,
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

module.exports = router;
