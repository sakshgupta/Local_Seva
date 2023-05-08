const express = require("express");
const router = express.Router();
const { payment } = require("../controller/stripeController");

// route prefix: "/api"
router.route("/config").post(payment);

module.exports = router;
