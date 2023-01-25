import React from "react";
import "./WhyPartner.css";
import whyRegister from "./images/whyRegister.png";
import info_image1 from "./images/info_image1.png";
import info_image2 from "./images/info_image2.png";
import info_image3 from "./images/info_image3.png";

function WhyPartner() {
  return (
    <div className="container whyPartner_container">
      <div className="whyPartner_heading">Why partner with us</div>
      <div className="whyPartner_image">
        <img src={whyRegister} alt="" />
      </div>
      <div className="whyPartner_info">
        <div className="whyPartner_info_boxes">
          <div className="whyPartner_info_boxes_image">
            <img src={info_image1} alt="" />
          </div>
          <div className="whyPartner_info_boxes_heading">
            Set your own hours
          </div>
          <div className="whyPartner_info_boxes_content">
            You decide when and how often you you want to give service.
          </div>
        </div>
        <div className="whyPartner_info_boxes">
          <div className="whyPartner_info_boxes_image">
            <img src={info_image2} alt="" />
          </div>
          <div className="whyPartner_info_boxes_heading">Get paid fast</div>
          <div className="whyPartner_info_boxes_content">
            Weekly payments in your bank account.
          </div>
        </div>
        <div className="whyPartner_info_boxes">
          <div className="whyPartner_info_boxes_image">
            <img src={info_image3} alt="" />
          </div>
          <div className="whyPartner_info_boxes_heading">
            Get support at every turn
          </div>
          <div className="whyPartner_info_boxes_content">
            If there’s anything that you need, you can reach us anytime.
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyPartner;
