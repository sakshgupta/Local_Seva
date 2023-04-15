import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./DashboardNavbar.css";

function DashboardNavbar() {
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
                <img src="/logo.png" alt="" className="navbar-logo-img" />
              </Link>
            </div>
            <div className="menu_link">
              <ul>
                <li>
                  <Link to="/handyman/profile">Profile</Link>
                </li>
                <li>
                  <Link to="/handyman/services">Services</Link>
                </li>
              </ul>
            </div>
            <div className="signup_login_button">
              <Link to="#">
                <button>Logout</button>
              </Link>
            </div>
            <div className="mobile_menu_toggle" onClick={handleToggleMenu}>
              <FaBars />
            </div>
          </nav>
          <div className={`mobile_menu_main ${showMobileMenu ? "show" : ""}`}>
            <ul>
              <li>
                <Link to="/handyman/profile">Profile</Link>
              </li>
              <li>
                <Link to="/handyman/services">Services</Link>
              </li>

              <li>
                <a href="#">
                  <button>Logout</button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardNavbar;
