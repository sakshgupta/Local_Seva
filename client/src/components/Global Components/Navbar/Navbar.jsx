import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getUserToken } from "./../../../utils/cookies/getUserToken";
import { removeUserToken } from "./../../../utils/cookies/removeUserToken";
import "./Navbar.css";

function Navbar() {
    const navigate = useNavigate();
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const user_id = getUserToken();
    const [loggedIn, setLoggedIn] = useState(!!getUserToken());

    useEffect(() => {
        if (user_id == undefined) {
            toast.error("You need to login first");
            navigate("/user/login");
        }
    }, []);

    const handleToggleMenu = () => {
        setShowMobileMenu(!showMobileMenu);
    };

    // function to handle logout button click
    const handleLogout = () => {
        removeUserToken();
        setLoggedIn(false);
        navigate("/user/login");
    };

    return (
        <>
            <div className="navbar_outer">
                <div className="container navbar_container">
                    <nav className="main_nav">
                        <div className="logo">
                            <Link to="/">
                                <img
                                    src="/logo.png"
                                    alt=""
                                    className="navbar-logo-img"
                                />
                            </Link>
                        </div>
                        <div className="menu_link">
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/services/servicePage">
                                        Services
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="mailto:sakshamgupta.dev@gmail.com"
                                        target="_blank"
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="signup_login_button">
                            {loggedIn ? (
                                <button onClick={handleLogout}>Logout</button>
                            ) : (
                                <Link to="/user/login">
                                    <button>Login/Signup</button>
                                </Link>
                            )}
                        </div>
                        <div
                            className="mobile_menu_toggle"
                            onClick={handleToggleMenu}
                        >
                            <FaBars />
                        </div>
                    </nav>
                    <div
                        className={`mobile_menu_main ${
                            showMobileMenu ? "show" : ""
                        }`}
                    >
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/services/servicePage">Services</Link>
                            </li>
                            <li>
                                <Link
                                    to="mailto:sakshamgupta.dev@gmail.com"
                                    target="_blank"
                                >
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                {loggedIn ? (
                                    <Link to="/user/login">
                                        <button onClick={handleLogout}>
                                            Logout
                                        </button>
                                    </Link>
                                ) : (
                                    <Link to="/user/login">
                                        <button>Login/Signup</button>
                                    </Link>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
