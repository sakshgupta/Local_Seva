import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setUserToken } from "../../../utils/cookies/setUserToken";
import "./ProfessionalOTP.css";

function ProfessionalOTP(props) {
    const navigate = useNavigate();

    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const otpInputs = useRef([]);

    const handleChange = (e, index) => {
        const newOtp = [...otp];
        newOtp[index] = e.target.value;
        setOtp(newOtp);

        // move to the next input box if a digit is entered
        if (e.target.value !== "" && index < otp.length - 1) {
            otpInputs.current[index + 1].focus();
        }
    };

    const handleOnPaste = (e) => {
        e.preventDefault();
        const clipboardData = e.clipboardData.getData("text/plain");
        const otpArray = clipboardData.split("").slice(0, otp.length);
        const newOtp = [...otp];
        otpArray.forEach((digit, index) => {
            newOtp[index] = digit;
            if (digit !== "" && index < otp.length - 1) {
                otpInputs.current[index + 1].focus();
            }
        });
        setOtp(newOtp);
    };

    const handleKeyDown = (e, index) => {
        // delete the previous input box if Backspace is pressed
        if (e.key === "Backspace" && index > 0 && otp[index] === "") {
            otpInputs.current[index - 1].focus();
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const enteredOtp = otp.join("");
        // Send the entered OTP to the backend for verification
        const response = await fetch(
            `${process.env.REACT_APP_BACKEND_API}/api/handyman/signup/verify`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    phone: props.number,
                    otp: enteredOtp,
                    email: props.email,
                    name: props.name,
                    password: props.password,
                }),
            }
        );
        // If the OTP is correct, redirect to the dashboard
        try {
            const data = await response.json();
            // console.log(data);
            if (response.status === 200) {
                toast.success(data.msg);
                // console.log(data);
                // setUserToken(data.user_id); //set up cookie
                toast.info("Redirecting you...");
                // console.log(data);
                setTimeout(() => {
                    navigate("/");
                }, 3000);
            } else {
                console.error(`Failed with status code ${response.status}`);
                toast.error(data.msg);
                // redirect to signup if shown "This Email ID is not registered. Try Signing Up instead!"
                setTimeout(() => {
                    // Set success message
                    toast.info("Redirecting you to SignUp...");
                }, 1700);

                // Redirect to dashboard
                setTimeout(() => {
                    navigate("/handyman/signup/details");
                }, 3000);
            }
        } catch (error) {
            console.error("Invalid JSON string:", error.message);
        }
    };

    const handleResendOtp = async () => {
        try {
            // Send a request to the backend to resend the OTP
            const response = await fetch(
                `${process.env.REACT_APP_BACKEND_API}/api/user/signup/resendOtp`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        contactNumber: props.number,
                        email: props.email,
                    }),
                }
            );
            const data = await response.json();
            if (response.status === 200) {
                // If the OTP is sent successfully, show a success message
                toast.success("in resend otp: " + data.msg);
            } else {
                // If there was an error in sending the OTP, show an error message
                toast.error("in resend otp: " + data.msg);
            }
        } catch (error) {
            console.error("Error:", error.message);
        }
    };

    return (
        <div className="otp_main_container">
            <div className="container otp_form">
                <form onSubmit={handleSubmit}>
                    <div className="otp_form_heading">
                        Enter the 6-digit code sent to
                        <br />
                        {props.email}
                    </div>
                    <div className="otp_form_input">
                        {otp.map((digit, index) => (
                            <input
                                type="text"
                                key={index}
                                value={digit}
                                maxLength={1}
                                onChange={(e) => handleChange(e, index)}
                                onPaste={handleOnPaste}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                ref={(ref) => (otpInputs.current[index] = ref)}
                            />
                        ))}
                    </div>
                    <div className="otp_form_button">
                        <button type="submit">Verify</button>
                    </div>
                    <div className="otp_form_button">
                        <button onClick={handleResendOtp}>Resend OTP</button>
                    </div>
                </form>
            </div>
            <ToastContainer
                autoClose={5000}
                theme="colored"
                newestOnTop={true}
            />
        </div>
    );
}

export default ProfessionalOTP;
