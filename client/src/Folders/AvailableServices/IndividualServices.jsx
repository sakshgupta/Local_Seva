import React from "react";
import rightArrow from "./images/arrowright.png";

function IndividualServices(props) {
  return (
    <div className="individual_services">
      <div className="individual_services_first">
        <div className="individual_services_image">{props.serviceImage}</div>
        <div className="individual_services_duration">
          {props.serviceTime} mins
        </div>
      </div>
      <div className="individual_services_second">
        <div className="individual_services_name">{props.serviceName}</div>
        <div className="individual_services_info">{props.serviceInfo}</div>
      </div>
      <div className="individual_services_third">
        <img src={rightArrow} alt="" />
      </div>
    </div>
  );
}

export default IndividualServices;
