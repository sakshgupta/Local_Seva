import React from "react";
import "./Otp.css";

function Otp() {
  return (
    <div className="otp_main_container">
      <div className="container otp_form">
        <form action="">
          <div className="otp_form_heading">
            Enter the 5-digit code sent to
            <br />
            +98 9100000009.
          </div>
          <div className="otp_form_input">
            <input type="number" placeholder="" maxLength={1} />
            <input type="number" placeholder="" maxLength={1} />
            <input type="number" placeholder="" maxLength={1} />
            <input type="number" placeholder="" maxLength={1} />
            <input type="number" placeholder="" maxLength={1} />
          </div>
          <div className="otp_form_button">
            <button>I did’nt received the code</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Otp;
