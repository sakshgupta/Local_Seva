import React from "react";
import "./Banner.css";
import registerProfessionalImg from "./images/registerProfessional.png";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <>
      <div className="registerProfessional_banner">
        <img src={registerProfessionalImg} alt="" />
      </div>
      <div className="container">
        <div className="registerProfessional_Link">
          <Link to="#">
            <button>Register Here</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Banner;
