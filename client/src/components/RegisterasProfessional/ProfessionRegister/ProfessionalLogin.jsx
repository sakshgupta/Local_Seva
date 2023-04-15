import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import apple_logo from "./images/apple_logo.png";
import facebook_logo from "./images/facebook_logo.png";
import google_logo from "./images/google_logo.png";
import "./ProfessionalLogin.css";

function ProfessionalLogin() {
  return (
    <div className="professional_login_main_container">
      <div className="container login_form">
        <form>
          <div className="login_form_heading">Professional Login</div>
          <div className="login_form_input">
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="login_form_input">
            <input type="password" placeholder="Enter your password" />
          </div>
          <div className="login_form_button">
            <button type="submit">Continue</button>
            {/* will remove this */}
            <button type="submit">Test</button>
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
              <div className="login_form_social_text">Continue with Google</div>
            </button>
            <button className="login_form_socials">
              <div className="login_form_social_image">
                <img src={apple_logo} alt="" />
              </div>
              <div className="login_form_social_text">Continue with Apple</div>
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
              <a href="/handyman/signup">Sign Up</a>
            </span>
          </div>
        </form>
      </div>
      <ToastContainer autoClose={5000} theme="colored" newestOnTop={true} />
    </div>
  );
}

export default ProfessionalLogin;
