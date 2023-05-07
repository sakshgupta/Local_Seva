const express = require("express");
const router = express.Router();
const {
    signUp,
    verifySignup,
    logIn,
    resendOtp,
} = require("../controller/userController");
const {
    handymanVerifySignup,
    handymanSignup,
    handymanLogin,
    jobStartOtpVerify,
} = require("../controller/handymanController");

// route prefix: "/api"
router.route("/user/login").post(logIn);
router.route("/user/signup").post(signUp);
router.route("/user/signup/verify").post(verifySignup);
router.route("/user/signup/resendOtp").post(resendOtp);

router.route("/handyman/login").post(handymanLogin);
router.route("/handyman/signup").post(handymanSignup);
router.route("/handyman/signup/verify").post(handymanVerifySignup);

router.route("/handyman/jobstartotp").post(jobStartOtpVerify);

module.exports = router;
