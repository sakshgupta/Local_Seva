import React, { useRef, useState } from "react";
import "./ProfessionalOTP.css";

function ProfessionalOTP() {
  return (
    <div className="professional_otp_main_container">
      <div className="container otp_form">
        <form>
          <div className="otp_form_heading">
            Enter the 6-digit code sent to
            <br />
          </div>
          <div className="otp_form_input">
            <input type="text" />
          </div>
          <div className="otp_form_button">
            <button type="submit">Verify</button>
          </div>
          <div className="otp_form_button">
            <button>Resend OTP</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProfessionalOTP;
