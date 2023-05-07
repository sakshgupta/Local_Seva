const express = require("express");
const router = express.Router();
const {
    createNotification,
    getNotificationsByHandyman,
    acceptRequest,
    rejectRequest,
    workDoneCheck,
} = require("../controller/notificationController");

// route prefix: "/api"
router.route("/createnotification").post(createNotification);
router.route("/getnotification").post(getNotificationsByHandyman);
router.route("/acceptnotification").post(acceptRequest);
router.route("/rejectnotification").post(rejectRequest);
router.route("/workdonecheck").post(workDoneCheck);

module.exports = router;
