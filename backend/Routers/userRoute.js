const express = require("express");
const {SignUp,SignIn,ForgotPassword,ResetPassword} = require("../Controllers/userControllers")
const router = express.Router();
router.use(express.json());

router.post("/login",SignIn);
router.post("/signup",SignUp);
router.post("/forgot-password",ForgotPassword);
router.get("/reset-password/:id/:token",ResetPassword);


module.exports = router;