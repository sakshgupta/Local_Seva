import React from "react";
import "./ServicePage.css";
import rightArrow from "./images/arrowright.png";

function ServicePage() {
  return (
    <div className="service_page_main">
      <div className="container">
        <div className="services_provided_container">
          <div className="services_provided_buttons">
            <div className="services_provided_duration">
              <button>Book Now</button>
            </div>
          </div>
          <div className="services_search">
            <input type="text" placeholder="What do you need?" />
          </div>
          <p>Available Services</p>
          <div className="individual_services">
            <div className="individual_services_first">
              <div className="individual_services_image">Maid Image</div>
              <div className="individual_services_duration">5 mins</div>
            </div>
            <div className="individual_services_second">
              <div className="individual_services_name">Maid</div>
              <div className="individual_services_info">
                Get professional cleaner with one tap
              </div>
            </div>
            <div className="individual_services_third">
              <img src={rightArrow} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicePage;
