import React from "react";
// import "./Login.css";
import "./Signup.css";
import apple_logo from "./images/apple_logo.png";
import google_logo from "./images/google_logo.png";
import facebook_logo from "./images/facebook_logo.png";

function Signup() {
  return (
    <div className="signup_main_container">
      <div className="container signup_form">
        <form action="">
          <div className="signup_form_heading">
            Create Account
            <br />
            <span>A few clicks away from creating your account</span>
          </div>
          <div className="signup_form_input">
            <input type="text" placeholder="Name" />
          </div>
          <div className="signup_form_input">
            <input type="text" placeholder="Email" />
          </div>
          <div className="signup_form_input">
            <input type="text" placeholder="Password" />
          </div>
          <div className="signup_form_button">
            <button>Create Account</button>
          </div>
          <div className="signup_form_or">
            <div className="signup_form_line"></div>
            <div className="signup_form_option">or</div>
            <div className="signup_form_line"></div>
          </div>
          <div className="signup_form_social_connect">
            <div className="signup_form_social_image">
              <img src={google_logo} alt="" />
            </div>
            <div className="signup_form_social_image">
              <img src={facebook_logo} alt="" />
            </div>
            <div className="signup_form_social_image">
              <img src={apple_logo} alt="" />
            </div>
          </div>
          <div className="signup_form_switch">
            Already have an account?
            <span>
              <a href="">Log in!</a>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
