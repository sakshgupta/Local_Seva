import React from "react";
import "./Login.css";
import apple_logo from "./images/apple_logo.png";
import google_logo from "./images/google_logo.png";
import facebook_logo from "./images/facebook_logo.png";

function LogIn() {
  return (
    <div className="login_main_container">
      <div className="container login_form">
        <form action="">
          <div className="login_form_heading">
            What's your phone number or email?
          </div>
          <div className="login_form_input">
            <input type="text" placeholder="Enter your phone number or email" />
          </div>
          <div className="login_form_button">
            <button>Continue</button>
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
              <a href="">Sign Up</a>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
