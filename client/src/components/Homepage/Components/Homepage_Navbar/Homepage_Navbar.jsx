import React from "react";
import { Link } from "react-router-dom";
import "./Homepage_Navbar.css";

function Homepage_Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <a href="/">
                        <img
                            src="/logo.png"
                            alt="Pick Your Locals"
                            className="navbar-logo-img"
                        />
                    </a>
                </div>
                <div className="navbar-links">
                    <Link to="/explore" className="navbar-link">
                        Explore
                    </Link>
                    <Link to="/about" className="navbar-link">
                        About Us
                    </Link>
                    <Link to="/contact" className="navbar-link">
                        Contact
                    </Link>
                    <Link
                        to="/user/login"
                        className="navbar-link navbar-link--cta"
                    >
                        Log In
                    </Link>
                    <Link
                        to="/user/signup"
                        className="navbar-link navbar-link--cta"
                    >
                        Sign Up
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Homepage_Navbar;
