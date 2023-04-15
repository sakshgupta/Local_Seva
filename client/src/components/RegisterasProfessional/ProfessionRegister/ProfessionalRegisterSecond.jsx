import React, { useState } from "react";
import apple_logo from "./images/apple_logo.png";
import facebook_logo from "./images/facebook_logo.png";
import google_logo from "./images/google_logo.png";
import "./ProfessionalRegister.css";
import DropDown from "./DropDown";

function ProfessionalRegisterSecond() {
  const [selected, setSelected] = useState("");
  return (
    <div>
      <div className="professional_signup_main_container">
        <div className="container signup_form">
          <form>
            <div className="signup_form_heading">Add Further Details</div>
            <div className="signup_form_input">
              <DropDown selected={selected} setSelected={setSelected} />
            </div>
            <div className="signup_form_input">
              <input type="number" placeholder="Aadhar Number" />
            </div>
            <span>Add Aadhar Front</span>
            <div className="signup_form_input">
              <button>Choose File</button>
            </div>
            <span>Add Aadhar Back</span>
            <div className="signup_form_input">
              <button>Choose File</button>
            </div>
            <div className="signup_form_input">
              <input type="number" placeholder="Phone Number" />
            </div>
            <div className="signup_form_button">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProfessionalRegisterSecond;
