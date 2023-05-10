import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "universal-cookie";
import Dropdown from "../../utils/DropDown";
import { setUserToken } from "../../utils/cookies/setUserToken";
import useGeoLocation from "../../utils/useGeoLocation";
import Otp from "./Otp";
import "./Signup.css";
import apple_logo from "./images/apple_logo.png";
import facebook_logo from "./images/facebook_logo.png";
import google_logo from "./images/google_logo.png";

function Signup() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [number, setNumber] = useState("");
    const [verified, setVerified] = useState(false);
    const [userId, setUserId] = useState(null);

    const location = useGeoLocation(); //getting current location of the handyman

    var cookies = new Cookies();

    useEffect(() => {
        const userId = cookies.get("user_token");
        // If cookie found, Redirect to dashboard
        if (userId) {
            setUserId(userId);
            toast.success("Redirecting you ...");

            // Redirect to dashboard
            setTimeout(() => {
                navigate("/");
            }, 2000);
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(
            `${process.env.REACT_APP_BACKEND_API}/api/user/signup`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                }),
            }
        );
        try {
            const data = await response.json();
            // console.log(data);
            if (response.status === 200) {
                toast.success(data.msg);
                setUserToken(data.user_id); //set up cookie
                toast.info("Redirecting you...");
                // console.log(data);
                setVerified(true);
            } else {
                console.error(`Failed with status code ${response.status}`);
                toast.error(data.msg);
            }
        } catch (error) {
            console.error("Invalid JSON string:", error.message);
        }
    };

    return (
        <div>
            {verified ? (
                <Otp
                    name={name}
                    password={password}
                    email={email}
                    number={number}
                    lat={location.coordinates.lat}
                    long={location.coordinates.lng}
                />
            ) : (
                <div className="signup_main_container">
                    <div className="container signup_form">
                        <form onSubmit={handleSubmit}>
                            <div className="signup_form_heading">
                                Create Account
                                <br />
                                <span>
                                    A few clicks away from creating your account
                                </span>
                            </div>
                            <div className="signup_form_input">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="signup_form_input">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="signup_form_input">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </div>
                            <div className="signup_form_input">
                                <input
                                    type="number"
                                    placeholder="Phone Number"
                                    value={number}
                                    onChange={(e) => setNumber(e.target.value)}
                                />
                            </div>
                            <div className="signup_form_button">
                                <button type="submit">Create Account</button>
                            </div>
                            <div className="signup_form_or">
                                <div className="signup_form_line"></div>
                                <div className="signup_form_option">or</div>
                                <div className="signup_form_line"></div>
                            </div>
                            <div className="signup_form_social_connect">
                                <div className="signup_form_social_image">
                                    <img src={google_logo} alt="" />
                                </div>
                                <div className="signup_form_social_image">
                                    <img src={facebook_logo} alt="" />
                                </div>
                                <div className="signup_form_social_image">
                                    <img src={apple_logo} alt="" />
                                </div>
                            </div>
                            <div className="signup_form_switch">
                                Already have an account?
                                <span>
                                    <Link to="/user/login">Log in!</Link>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Signup;
