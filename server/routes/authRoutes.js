const express = require("express");
const router = express.Router();
const {
    signUp,
    verifySignup,
    logIn,
} = require("../controller/userAuthController");

// route prefix: "/api/user"
router.route("/signup").post(signUp);
router.route("/signup/verify").post(verifySignup);
router.route("/login").post(logIn);

module.exports = router;