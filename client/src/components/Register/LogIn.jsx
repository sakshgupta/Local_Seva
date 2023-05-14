import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Cookies from "universal-cookie";
import { setUserToken } from "./../../utils/cookies/setUserToken";
import "./Login.css";
import back from "./images/back.png";

function LogIn() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userId, setUserId] = useState(null);

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
            `${process.env.REACT_APP_BACKEND_API}/api/user/login`,
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
                setUserToken(data.user_id); //set up cookie
                // console.log(data);
                setTimeout(() => {
                    navigate("/");
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
        <div className="login_main_container">
            <img
                className="login_main_back"
                src={back}
                onClick={() => navigate("/")}
            />
            <div className="container login_form">
                <form onSubmit={handleSubmit}>
                    <div className="login_form_heading">User Login</div>
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
                                setEmail("sakshamjerry92@gmail.com");
                                setPassword("123");
                            }}
                        >
                            Test
                        </button>
                    </div>
                    <div className="login_form_switch">
                        Don't have an account?
                        <span>
                            <Link to="/user/signup">Sign Up</Link>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LogIn;
