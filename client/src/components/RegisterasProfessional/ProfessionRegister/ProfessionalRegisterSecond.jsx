import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import availableServices from "../../../utils/AvailableServices";
import Dropdown from "../../../utils/DropDown";
import { setHandymanToken } from "../../../utils/cookies/setHandymanToken";
import useGeoLocation from "../../../utils/useGeoLocation";
import "./ProfessionalRegister.css";
import back from "./images/back.png";

function ProfessionalRegisterSecond(props) {
    const navigate = useNavigate();

    const location = useGeoLocation(); //getting current location of the handyman

    const [selected, setSelected] = useState("");
    const [aadharNumber, setAadharNumber] = useState("");
    const [otp, setOtp] = useState("");
    const [aadharFront, setAadharFront] = useState("");
    const [aadharBack, setAadharBack] = useState("");
    const [address, setAddress] = useState("");
    const [profile, setProfile] = useState("");

    const options = availableServices.map((service) => service.serviceName);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            services: selected,
            name: props.name,
            email: props.email,
            otp: otp,
            password: props.password,
            phone: props.number,
            aadharNumber: aadharNumber,
            aadharFront: aadharFront != "" ? aadharFront : undefined,
            aadharBack: aadharBack != "" ? aadharBack : undefined,
            address: address,
            lat: location.coordinates.lat,
            long: location.coordinates.lng,
            profile: profile != "" ? profile : undefined,
        };
        // console.log(data);

        const response = await fetch(
            `${process.env.REACT_APP_BACKEND_API}/api/handyman/signup/verify`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }
        );
        // If the OTP is correct, redirect to the dashboard
        try {
            const data = await response.json();
            // console.log(data);
            if (response.status === 200) {
                toast.success(data.msg);
                // console.log(data);
                setHandymanToken(data.handyman_id); //set up cookie
                toast.info("Redirecting you...");
                // console.log(data);
                setTimeout(() => {
                    navigate("/handyman/dashboard");
                }, 3000);
            } else {
                console.error(`Failed with status code ${response.status}`);
                toast.error(data.msg);
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

    // const handleAadhaarFrontImageUpload = (e) => {
    //     const file = e.target.files[0];
    //     TransformAadharFrontFileData(file);
    // };

    // const handleAadhaarBackImageUpload = (e) => {
    //     const file = e.target.files[0];
    //     TransformAadharBackFileData(file);
    // };

    // const TransformAadharFrontFileData = (file) => {
    //     const reader = new FileReader();

    //     if (file) {
    //         reader.readAsDataURL(file);
    //         reader.onloadend = () => {
    //             setAadharFront(reader.result);
    //             console.log(aadharFront);
    //         };
    //     } else {
    //         setAadharFront("");
    //     }
    // };

    // const TransformAadharBackFileData = (file) => {
    //     const reader = new FileReader();

    //     if (file) {
    //         reader.readAsDataURL(file);
    //         reader.onloadend = () => {
    //             setAadharBack(reader.result);
    //         };
    //     } else {
    //         setAadharBack("");
    //     }
    // };

    return (
        <div>
            <div className="professional_signup_main_container">
                <img
                    className="professional_signup_main_back"
                    src={back}
                    onClick={() => navigate("/handyman/register")}
                />
                <div className="container signup_form">
                    <form onSubmit={handleSubmit}>
                        <div className="signup_form_heading">
                            Add Further Details
                        </div>
                        <div className="signup_form_input">
                            <input
                                type="number"
                                placeholder="OTP"
                                onChange={(e) => setOtp(e.target.value)}
                            />
                        </div>
                        <div className="signup_form_input">
                            <Dropdown
                                options={options}
                                selected={selected}
                                setSelected={setSelected}
                            />
                        </div>
                        <div className="signup_form_input">
                            <input
                                type="string"
                                placeholder="Profile URL"
                                onChange={(e) => setProfile(e.target.value)}
                            />
                        </div>
                        <div className="signup_form_input">
                            <input
                                type="text"
                                placeholder="Address"
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </div>
                        <div className="signup_form_input">
                            <input
                                type="number"
                                placeholder="Aadhar Number"
                                onChange={(e) =>
                                    setAadharNumber(e.target.value)
                                }
                            />
                        </div>
                        <span>Add Aadhar Front</span>
                        <div className="signup_form_input">
                            <input
                                type="file"
                                multiple={false}
                                accept="image/*"
                                // onChange={handleAadhaarFrontImageUpload}
                            />
                        </div>
                        <span>Add Aadhar Back</span>
                        <div className="signup_form_input">
                            <input
                                type="file"
                                multiple={false}
                                accept="image/*"
                                // onChange={handleAadhaarBackImageUpload}
                            />
                        </div>
                        <div className="signup_form_button">
                            <button onClick={handleResendOtp}>
                                Resend OTP
                            </button>
                        </div>
                        <div className="signup_form_button">
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ProfessionalRegisterSecond;
