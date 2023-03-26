const otpGenerator = require("otp-generator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;

// requiring models
const { Handyman, Otp } = require("../models/model");
// requiring controllers
const { sendOtpMail } = require("./mailController");

// route - http://localhost:8080/api/handyman/signup/verify
const handymanVerifySignup = async (req, res) => {
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

            // generate otp for new user
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

// route - http://localhost:8080/api/handyman/signup
const handymanSignup = async (req, res) => {
    const {
        name: Name,
        email: Email,
        otp: inputOtp,
        password: Password,
        phone: Phone,
        address: Address,
        services: Services,
    } = req.body;

    Otp.find({ email: Email }, async function (err, docs) {
        if (docs.length === 0) {
            return res.status(400).send("The OTP expired. Please try again!");
        } else {
            const generatedOtp = docs[0].otp;

            const validUser = await bcrypt.compare(inputOtp, generatedOtp);

            if (Email === docs[0].email && validUser) {
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
                    address: Address,
                    services: Services,
                    ratings: [],
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
                    user_id: token,
                });
            } else {
                return res
                    .status(400)
                    .send({ msg: "OTP does not match. Please try again!" });
            }
        }
    });
};

const handymanSignin = async (req, res) => {
    const Email = req.body.email;
    const Pass = req.body.password;

    Handyman.find({ email: Email }, async function (err, docs) {
        if (docs.length === 0) {
            return res.status(400).send({ msg: "Handyman access denied" });
        } else if (Pass === docs[0].pass) {
            res.status(200).send({
                msg: "Success",
                handyman_token: docs[0].handyman_id,
            });
        } else {
            return res.status(400).send({ msg: "Email or Password is wrong" });
        }
    });
};

const handymanDetails = async (req, res) => {
    const handyman_token = req.body.handyman_id;

    Handyman.find({ handyman_id: handyman_token }, async function (err, docs) {
        if (err) {
            console.log(err);
            res.status(400).send({ msg: "No such handyman exists" });
        } else {
            res.status(200).send(docs[0]);
        }
    });
};

module.exports = {
    handymanVerifySignup,
    handymanSignup,
    handymanSignin,
    handymanDetails,
};
