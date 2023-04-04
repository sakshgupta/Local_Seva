import React from "react";
import "./Banner.css";
import registerProfessionalImg from "./images/registerProfessional.png";

function Banner() {
  return (
    <>
      <div className="registerProfessional_banner">
        <img src={registerProfessionalImg} alt="" />
      </div>
      <div className="container">
        <div className="registerProfessional_Link">
          <a href="#">
            <button>Register Here</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Banner;
