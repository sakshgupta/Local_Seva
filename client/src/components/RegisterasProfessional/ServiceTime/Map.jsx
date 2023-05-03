import React from "react";
import "./Map.css";
import map_start_end from "./images/map_start_end.png";

function Map() {
  return (
    <div className="map_outer">
      <div className="container">
        <div className="service_map">
          <div className="service_map_image">
            <img src={map_start_end} alt="" />
          </div>
          <div className="service_map_button">
            <a href="#">
              <button>Click here to open Map</button>
            </a>
          </div>
        </div>

        <div className="service_otp">
          <div className="service_otp_heading">
            Enter the 4-digit code sent to customer
            <p>(Upon reaching the destination)</p>
          </div>
          <div className="service_otp_otp">
            <input type="text" maxLength={1} />
            <input type="text" maxLength={1} />
            <input type="text" maxLength={1} />
            <input type="text" maxLength={1} />
          </div>
          <div className="service_otp_reset">
            <button>Customer didn't received the code?</button>
          </div>
        </div>

        <div className="service_cancel">
          <button>Cancel Service?</button>
        </div>
      </div>
    </div>
  );
}

export default Map;
