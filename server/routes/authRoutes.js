const express = require("express");
const router = express.Router();
const {
    signUp,
    verifySignup,
    logIn,
} = require("../controller/userAuthController");
const {
    handymanVerifySignup,
    handymanSignup,
} = require("../controller/handymanController");

// route prefix: "/api"
router.route("/user/signup").post(signUp);
router.route("/user/signup/verify").post(verifySignup);
router.route("/user/login").post(logIn);

router.route("/handyman/signup/verify").post(handymanVerifySignup);
router.route("/handyman/signup").post(handymanSignup);

module.exports = router;