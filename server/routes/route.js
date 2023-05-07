const express = require("express");
const router = express.Router();
const { getAllUsers, userDetails, } = require("../controller/userController");

const { handymanDetails, getAllHandyman } = require("../controller/handymanController");

// route prefix: "/api"
router.route("/user/getallusers").get(getAllUsers);
router.route("/user/getuser").post(userDetails);
router.route("/handyman/getallhandyman").get(getAllHandyman);
router.route("/handyman/gethandyman").post(handymanDetails);

module.exports = router;
