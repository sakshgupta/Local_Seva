import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./Map.css";
import map_start_end from "./images/map_start_end.png";

function Map() {
    const navigate = useNavigate();
    const location = useLocation();

    const [userData, setUserData] = useState(null);
    const user_id = new URLSearchParams(location.search).get("user_id");

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

    useEffect(() => {
        const fetchUserData = async () => {
            const response = await fetch(
                `${process.env.REACT_APP_BACKEND_API}/api/user/getuser`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ user_id }),
                }
            );
            const data = await response.json();
            setUserData(data);
        };
        fetchUserData();
    }, [user_id]);

    const handleOpenMaps = () => {
        if (userData && userData.lat && userData.long) {
            const url = `https://www.google.com/maps/search/?api=1&query=${userData.lat},${userData.long}`;
            window.open(url, "_blank");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const enteredOtp = otp.join("");
        const response = await fetch(
            `${process.env.REACT_APP_BACKEND_API}/api/handyman/jobstartotp`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    otp: enteredOtp,
                    email: userData.email,
                }),
            }
        );
        try {
            const data = await response.json();
            if (response.status === 200) {
                toast.success(data.msg);
                setTimeout(() => {
                    navigate(`/handyman/workdone?user_id=${user_id}`);
                }, 3000);
            } else {
                console.error(`Failed with status code ${response.status}`);
                toast.error(data.msg);
            }
        } catch (error) {
            console.error("Invalid JSON string:", error.message);
        }
    };

    return (
        <div className="map_outer">
            <div className="container">
                <div className="service_map">
                    <div className="service_map_image">
                        <img src={map_start_end} alt="" />
                    </div>
                    <div className="service_map_button">
                        <a href="#">
                            <button onClick={handleOpenMaps}>
                                Click here to open Map
                            </button>
                        </a>
                    </div>
                </div>

                <div className="service_otp">
                    <form onSubmit={handleSubmit}>
                        <div className="service_otp_heading">
                            Enter the 6-digit job start code sent to the user
                            <p>(Upon reaching the destination)</p>
                        </div>
                        <div className="service_otp_otp">
                            {otp.map((digit, index) => (
                                <input
                                    type="text"
                                    key={index}
                                    value={digit}
                                    maxLength={1}
                                    onChange={(e) => handleChange(e, index)}
                                    onPaste={handleOnPaste}
                                    onKeyDown={(e) => handleKeyDown(e, index)}
                                    ref={(ref) =>
                                        (otpInputs.current[index] = ref)
                                    }
                                />
                            ))}
                        </div>
                        <div className="service_otp_reset">
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>

                {/* <div className="service_cancel">
                    <button>Cancel Service?</button>
                </div> */}
            </div>
        </div>
    );
}

export default Map;
