import React from "react";
import "./OurServices.css";
import service_1 from "./images/service_1.png";
import service_2 from "./images/service_2.png";
import service_3 from "./images/service_3.png";
import service_4 from "./images/service_4.png";
import service_5 from "./images/service_5.png";
import service_6 from "./images/service_6.png";
import services_bottom from "./images/services_bottom.png";

function OurServices() {
  return (
    <div className="outservices_maincontainer">
      <div className="container ourServices">
        <div className="ourServices_heading">Our Services</div>
        <div className="ourServices_services">
          <div className="services_box">
            <div className="services_image">
              <img src={service_1} alt="" />
            </div>
            <div className="service_name">Carpenter</div>
          </div>
          <div className="services_box">
            <div className="services_image">
              <img src={service_2} alt="" />
            </div>
            <div className="service_name">Maid</div>
          </div>
          <div className="services_box">
            <div className="services_image">
              <img src={service_3} alt="" />
            </div>
            <div className="service_name">Plumber</div>
          </div>
          <div className="services_box">
            <div className="services_image">
              <img src={service_4} alt="" />
            </div>
            <div className="service_name">Garbage Collector</div>
          </div>
          <div className="services_box">
            <div className="services_image">
              <img src={service_5} alt="" />
            </div>
            <div className="service_name">All Rounder</div>
          </div>
          <div className="services_box">
            <div className="services_image">
              <img src={service_6} alt="" />
            </div>
            <div className="service_name">Eletrician</div>
          </div>
        </div>
        <div className="services_bottom">
          <div className="services_bottom_heading">
            Get a hand for your every need
          </div>
          <div className="services_bottom_image">
            <img src={services_bottom} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
