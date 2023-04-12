import React from "react";
import "../Services_Navbar.css";

function Services_Navbar(props) {
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
                    <span className="navbar-link">
                        {/* to make the first letter capital */}
                        {props.serviceName.charAt(0).toUpperCase() +
                            props.serviceName.slice(1)}
                    </span>
                </div>
            </div>
        </nav>
    );
}

export default Services_Navbar;
