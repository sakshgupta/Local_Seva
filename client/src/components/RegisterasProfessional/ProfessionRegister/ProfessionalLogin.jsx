import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "universal-cookie";
import { setHandymanToken } from "../../../utils/cookies/setHandymanToken";
import "./ProfessionalLogin.css";
import apple_logo from "./images/apple_logo.png";
import facebook_logo from "./images/facebook_logo.png";
import google_logo from "./images/google_logo.png";

function ProfessionalLogin() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [handymanId, setHandymanId] = useState(null);

    var cookies = new Cookies();

    useEffect(() => {
        const handymanId = cookies.get("handyman_token");
        // If cookie found, Redirect to dashboard
        if (handymanId) {
            setHandymanId(handymanId);
            toast.success("Redirecting you ...");

            // Redirect to dashboard
            setTimeout(() => {
                navigate("/handyman/dashboard");
            }, 2000);
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(
            `${process.env.REACT_APP_BACKEND_API}/api/handyman/login`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            }
        );
        try {
            const data = await response.json();
            // console.log(data);
            if (response.status === 200) {
                toast.success(data.msg);
                toast.info("Redirecting you...");
                // console.log(data);
                setHandymanToken(data.handyman_id); //set up cookie
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

    return (
        <div className="professional_login_main_container">
            <div className="container login_form">
                <form onSubmit={handleSubmit}>
                    <div className="login_form_heading">Professional Login</div>
                    <div className="login_form_input">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="login_form_input">
                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="login_form_button">
                        <button type="submit">Continue</button>
                        {/* will remove this */}
                        <button
                            type="submit"
                            onClick={() => {
                                setEmail("saka@gmail.com");
                                setPassword("123");
                            }}
                        >
                            Test
                        </button>
                    </div>
                    <div className="login_form_or">
                        <div className="login_form_line"></div>
                        <div className="login_form_option">or</div>
                        <div className="login_form_line"></div>
                    </div>
                    <div className="login_form_social_connect">
                        <button className="login_form_socials">
                            <div className="login_form_social_image">
                                <img src={google_logo} alt="" />
                            </div>
                            <div className="login_form_social_text">
                                Continue with Google
                            </div>
                        </button>
                        <button className="login_form_socials">
                            <div className="login_form_social_image">
                                <img src={apple_logo} alt="" />
                            </div>
                            <div className="login_form_social_text">
                                Continue with Apple
                            </div>
                        </button>
                        <button className="login_form_socials">
                            <div className="login_form_social_image">
                                <img src={facebook_logo} alt="" />
                            </div>
                            <div className="login_form_social_text">
                                Continue with Facebook
                            </div>
                        </button>
                    </div>
                    <div className="login_form_switch">
                        Don't have an account?
                        <span>
                            <Link to="/handyman/signup">Sign Up</Link>
                        </span>
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

export default ProfessionalLogin;
