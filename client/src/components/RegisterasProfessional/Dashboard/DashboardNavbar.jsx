import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { gethandymanToken } from "../../../utils/cookies/getHandymanToken";
import { removeHandymanToken } from "./../../../utils/cookies/removeHandymanToken";
import "./DashboardNavbar.css";

function DashboardNavbar() {
    const navigate = useNavigate();
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const handyman_id = gethandymanToken();

    useEffect(() => {
        if (handyman_id == undefined) {
            toast.error("You need to login first");
            navigate("/handyman/login");
        }
    }, []);

    const handleToggleMenu = () => {
        setShowMobileMenu(!showMobileMenu);
    };

    // function to handle logout button click
    const handleLogout = () => {
        removeHandymanToken();
        navigate("/handyman/login");
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
                                    <Link
                                        to={`/handyman/profile?handyman_id=${handyman_id}`}
                                    >
                                        Profile
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/handyman/dashboard">
                                        Dashboard
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="signup_login_button">
                            <button onClick={handleLogout}>Logout</button>
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
                                <Link to="/handyman/profile">Profile</Link>
                            </li>
                            <li>
                                <Link to="/handyman/services">Services</Link>
                            </li>

                            <li>
                                <button onClick={handleLogout}>Logout</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DashboardNavbar;
