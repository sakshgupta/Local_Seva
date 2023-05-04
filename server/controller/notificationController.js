const dotenv = require("dotenv");
dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;

// requiring models
const { Notification } = require("../models/model");
// requiring controllers
const { sendOtpMail, sendLoginVerificationMail } = require("./mailController");

// route - http://localhost:8080/api/createnotification
const createNotification = async (req, res) => {
    const { message, user_id, handyman_id } = req.body;

    const newNotification = new Notification({
        message,
        user_id,
        handyman_id,
        status: "pending",
    });

    await newNotification
        .save()
        .then((notification) => {
            console.log("Notification added");
            res.status(201).json(notification);
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({ error: error.message });
        });
};

// route - http://localhost:8080/api/getnotification
const getNotificationsByHandyman = async (req, res) => {
    const handyman = req.body.handyman_id;
    // await Notification.find({ handyman })
    //     .then((notifications) => {
    //         console.log(notifications);
    //         res.status(200).json(notifications);
    //     })
    //     .catch((error) => {
    //         console.log("Didn't found any notifications");
    //         res.status(500).json({ error: error.message });
    //     });

    try {
        const notification = await Notification.find({});
        console.log(notification);
        res.status(200).json(notification);
    } catch (error) {
        res.status(404).json({ msg: error.message });
    }
};

// route - http://localhost:8080/api/acceptnotification
const acceptRequest = async (req, res) => {
    try {
        const notification = await Notification.findById(req.body.id);
        if (!notification) {
            return res.status(404).json({ message: "Notification not found" });
        }
        if (notification.status !== "pending") {
            return res
                .status(400)
                .json({ message: "Notification has already been processed" });
        }
        notification.status = "accepted";
        await notification.save();
        res.json(notification);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// route - http://localhost:8080/api/rejectnotification
const rejectRequest = async (req, res) => {
    try {
        const notification = await Notification.findById(req.body.id);
        if (!notification) {
            return res.status(404).json({ message: "Notification not found" });
        }
        if (notification.status !== "pending") {
            return res
                .status(400)
                .json({ message: "Notification has already been processed" });
        }
        notification.status = "rejected";
        await notification.save();
        res.json(notification);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createNotification,
    getNotificationsByHandyman,
    acceptRequest,
    rejectRequest,
};
