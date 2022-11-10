const express = require("express");
const {SignUp,SignIn} = require("../Controllers/userControllers")
const router = express.Router();
router.use(express.json());

router.post("/login",SignIn);
router.post("/signup",SignUp);

module.exports = router;