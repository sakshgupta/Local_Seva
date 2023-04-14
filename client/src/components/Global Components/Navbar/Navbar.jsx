import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const handleToggleMenu = () => {
        setShowMobileMenu(!showMobileMenu);
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
                                    <Link to="/">About Us</Link>
                                </li>
                                <li>
                                    <Link to="/">Services</Link>
                                </li>
                                <li>
                                    <Link to="/">Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="signup_login_button">
                            <Link to="/user/login">
                                <button>Login/Signup</button>
                            </Link>
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
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">About Us</a>
                            </li>
                            <li>
                                <a href="#">Services</a>
                            </li>
                            <li>
                                <a href="#">Contact Us</a>
                            </li>
                            <li>
                                <a href="#">
                                    <button>Login/Signup</button>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;