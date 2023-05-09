const otpGenerator = require("otp-generator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;

// requiring models
const { Handyman, Otp } = require("../models/model");
// requiring controllers
const { sendOtpMail, sendLoginVerificationMail } = require("./mailController");
// requiring utility functions
const cloudinary = require("../utils/cloudinary");

// route - http://localhost:8080/api/handyman/signup
const handymanSignup = async (req, res) => {
    const Email = req.body.email;

    Handyman.find({ email: Email }, async function (err, docs) {
        if (docs.length !== 0) {
            return res.status(400).send({
                msg: "This Email ID is already registered. Try Signing In instead!",
            });
        } else {
            //clearing otp auth table
            try {
                await Otp.deleteMany({ email: Email }, function (err) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("Handymans deleted successfully");
                    }
                });
            } catch (e) {
                console.log(e);
            }

            // generate otp for new handyman
            const OTP = otpGenerator.generate(6, {
                digits: true,
                upperCaseAlphabets: false,
                specialChars: false,
                lowerCaseAlphabets: false,
            });

            const otp = {
                email: Email,
                otp: OTP,
            };
            console.log("Before hashing: ", otp);

            sendOtpMail(Email, otp.otp);

            //encrypting the otp and then saving to Otp_table
            const salt = await bcrypt.genSalt(10);
            otp.otp = await bcrypt.hash(otp.otp, salt);

            const newHandymanLogin = new Otp({
                email: otp.email,
                otp: otp.otp,
            });

            newHandymanLogin.save((error, success) => {
                if (error) console.log(error);
                else console.log("Saved::otp::ready for validation");
            });

            return res.status(200).send({ msg: "Otp sent successfully!" });
        }
    });
};

// route - http://localhost:8080/api/handyman/signup/verify
const handymanVerifySignup = async (req, res) => {
    console.log(req.body);
    const {
        name: Name,
        email: Email,
        otp: inputOtp,
        password: Password,
        phone: Phone,
        aadharNumber: AadharNumber,
        aadharFront: AadharFront,
        aadharBack: AadharBack,
        services: Services,
        profile: Profile,
        lat: Lat,
        long: Long,
    } = req.body;

    Otp.find({ email: Email }, async function (err, docs) {
        if (docs.length === 0) {
            return res.status(400).send("The OTP expired. Please try again!");
        } else {
            const generatedOtp = docs[0].otp;

            const validHandyman = await bcrypt.compare(inputOtp, generatedOtp);

            if (Email === docs[0].email && validHandyman) {
                // generating handymman token
                const secret = JWT_SECRET;
                const payload = {
                    email: Email,
                };
                const token = jwt.sign(payload, secret);

                // Hash the password
                const salt = await bcrypt.genSalt();
                const hashedPassword = await bcrypt.hash(Password, salt);

                const new_handyman = new Handyman({
                    handyman_id: token,
                    name: Name,
                    email: Email,
                    phone: Phone,
                    password: hashedPassword,
                    aadharNumber: AadharNumber,
                    aadharFront: undefined,
                    aadharBack: undefined,
                    lat: Lat,
                    long: Long,
                    services: Services,
                    profile: Profile,
                    usersSelected: [],
                });

                await new_handyman.save((error, success) => {
                    if (error) console.log(error);
                    else console.log("Saved::New Handyman::credentials.");
                });

                Otp.deleteMany({ email: Email }, async function (err) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(`OTP table for ${Email} cleared.`);
                    }
                });

                return res.status(200).send({
                    msg: "Handyman Account creation successful!",
                    handyman_id: token,
                });
            } else {
                return res
                    .status(400)
                    .send({ msg: "OTP does not match. Please try again!" });
            }
        }
    });
};

// route - http://localhost:8080/api/handyman/login
const handymanLogin = async (req, res) => {
    const Email = req.body.email;
    const Password = req.body.password;

    Handyman.find({ email: Email }, async function (err, docs) {
        if (docs.length === 0) {
            return res.status(400).send({ msg: "Handyman not found" });
        } else {
            const validPassword = await bcrypt.compare(
                Password,
                docs[0].password
            );

            if (Email === docs[0].email && validPassword) {
                Handyman.find({ email: Email }, async function (err, handyman) {
                    var Details = {
                        email: handyman[0].email,
                        name: handyman[0].handymanname,
                    };
                    console.log(handyman);
                    sendLoginVerificationMail(Details);
                    res.status(200).send({
                        msg: "Log-In successful!",
                        handyman_id: handyman[0].handyman_id,
                    });
                });
            } else {
                return res.status(406).send({ msg: "Invalid password" });
            }
        }
    });
};

// route - http://localhost:8080/api/handyman/getallhandyman
const getAllHandyman = async (req, res) => {
    try {
        const handyman = await Handyman.find({});
        res.status(200).json(handyman);
    } catch (error) {
        res.status(404).json({ msg: error.message });
    }
};

// route - http://localhost:8080/api/handyman/gethandyman
const handymanDetails = async (req, res) => {
    const handyman_id = req.body.handyman_id;

    Handyman.find({ handyman_id: handyman_id }, async function (err, docs) {
        if (err) {
            console.log(err);
            res.status(400).send({ msg: "No such handyman exists" });
        } else {
            res.status(200).send(docs[0]);
        }
    });
};

// route - http://localhost:8080/api/handyman/jobstartotp
const jobStartOtpVerify = async (req, res) => {
    const otp = req.body.otp;
    const Email = req.body.email;

    Otp.find({ email: Email }, async function (err, docs) {
        if (docs.length === 0) {
            return res.status(400).send("The OTP expired. Please try again!");
        } else {
            const generatedOtp = docs[0].otp;

            const validHandyman = await bcrypt.compare(otp, generatedOtp);

            if (Email === docs[0].email && validHandyman) {
                Otp.deleteMany({ email: Email }, async function (err) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(`OTP table for ${Email} cleared.`);
                    }
                });
                return res.status(200).send({
                    msg: "Job Started",
                });
            } else {
                return res
                    .status(400)
                    .send({ msg: "OTP does not match. Please try again!" });
            }
        }
    });
};

module.exports = {
    handymanVerifySignup,
    handymanSignup,
    handymanLogin,
    handymanDetails,
    getAllHandyman,
    jobStartOtpVerify,
};
