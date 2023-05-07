const nodemailer = require("nodemailer");
require("dotenv").config();

// to send otp mail
function sendOtpMail(Email, otp) {
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.NODE_MAILER_USER,
            pass: process.env.NODE_MAILER_PASS,
        },
        tls: {
            rejectUnauthorized: false,
        },
    });

    let mailOptions = {
        from: process.env.NODE_MAILER_USER,
        to: Email,
        subject: "One Time Password - Local Handyman",
        html: `Please keep your OTP confidential and do not share it with anyone. The OTP will be valid for five minutes only. <br><strong>OTP: ${otp}</strong><br><br>Thank you for choosing Local Handyman!<br><br>If you have any questions, please contact us at:<br>Saksham Gupta: saksham.gupta2020@vitbhopal.ac.in.`,
    };

    transporter.sendMail(mailOptions, function (err, success) {
        if (err) {
            console.log(err);
        } else {
            console.log("Otp Email sent successfully");
        }
    });
}

// to send job start otp mail
function sendJobStartOtpMail(Email, otp) {
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.NODE_MAILER_USER,
            pass: process.env.NODE_MAILER_PASS,
        },
        tls: {
            rejectUnauthorized: false,
        },
    });

    let mailOptions = {
        from: process.env.NODE_MAILER_USER,
        to: Email,
        subject: "Job Start One Time Password - Local Handyman",
        html: `Please share this OTP with the handyman once he arives. <br><strong>OTP: ${otp}</strong><br><br>Thank you for choosing Local Handyman!<br><br>If you have any questions, please contact us at:<br>Saksham Gupta: saksham.gupta2020@vitbhopal.ac.in.`,
    };

    transporter.sendMail(mailOptions, function (err, success) {
        if (err) {
            console.log(err);
        } else {
            console.log("Job Start Otp Email sent successfully");
        }
    });
}

// to send Login Verification Mail
function sendLoginVerificationMail(Details) {
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.NODE_MAILER_USER,
            pass: process.env.NODE_MAILER_PASS,
        },
        tls: {
            rejectUnauthorized: false,
        },
    });

    let mailOptions = {
        from: process.env.NODE_MAILER_USER,
        to: Details.email,
        subject: `Login Successful - Local Handyman`,
        html: `Dear <i>${Details.name}</i>,<br><br>You have successfully logged in to your account at Local Handyman! Thank you for being a part of our community.<br><br>If you have any questions or concerns, please don't hesitate to reach out to us. We're here to help please contact us at:<br>Saksham Gupta: saksham.gupta2020@vitbhopal.ac.in.<br><br>Best regards,<br>The Local Handyman Team`,
    };

    transporter.sendMail(mailOptions, function (err, success) {
        if (err) {
            console.log(err);
        } else {
            console.log("Login Verification Mail sent successfully");
        }
    });
}

// to send ticket
function sendTicket(Details) {
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.NODE_MAILER_USER,
            pass: process.env.NODE_MAILER_PASS,
        },
        tls: {
            rejectUnauthorized: false,
        },
    });

    let mailOptions = {
        from: process.env.NODE_MAILER_USER,
        to: Details.email,
        subject: `Your Online Event Pass for ${Details.event_name} - Local Handyman✨`,
        html: `Dear <i>${Details.name}</i>,<br><br>Thank you for registering for ${Details.event_name}! We are excited to have you join us and want to make sure that you have all the information you need to have a great time.<br><br>Your online pass has been generated and is ready for you to use. Please remember to keep this pass with you at all times during the event and do not share it with anyone else.<br><br><strong>Pass Number: ${Details.pass}</strong><br><br>Here are the details of your registration:<br>Name: ${Details.name}<br>Amount Paid: ${Details.price}<br>Address: ${Details.address1} <br> City: ${Details.city} <br> PinCode: ${Details.zip}<br><br>If you have any questions or concerns, please don't hesitate to reach out to us. We're here to help please contact us at:<br>Anurag Singh: 2002anuragksingh@gmail.com<br>Devanshu Yadav: devanshu.yadav2020@vitbhopal.ac.in<br>Saksham Gupta: saksham.gupta2020@vitbhopal.ac.in.<br><br>Best regards,<br>The Local Handyman Team`,
    };

    transporter.sendMail(mailOptions, function (err, success) {
        if (err) {
            console.log(err);
        } else {
            console.log("Ticket Email sent successfully");
        }
    });
}

module.exports = {
    sendOtpMail,
    sendLoginVerificationMail,
    sendTicket,
    sendJobStartOtpMail,
};
