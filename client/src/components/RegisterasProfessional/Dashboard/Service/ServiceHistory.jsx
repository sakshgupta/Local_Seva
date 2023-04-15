import React from "react";
import "./ServiceHistory.css";

function ServiceHistory() {
  return (
    <div className="serviceHistory_outer">
      <div className="container">
        <div className="serviceHistory">
          <div className="serviceHistory_heading">Your History of Work</div>

          <div className="serviceHistory_info">
            <div className="serviceHistory_maincontainer">
              <div className="serviceInfo_heading serviceInfo_details">
                <ul>
                  <li>Date </li>
                  <li>Customer</li>
                  <li>Work Done</li>
                  <li>Location</li>
                  <li>Amount</li>
                </ul>
              </div>
              <div className="serviceInfo_details">
                <ul>
                  <li>15/4/2023</li>
                  <li>First Name</li>
                  <li>Cleaning</li>
                  <li>Sehore</li>
                  <li>344</li>
                </ul>
              </div>
              <div className="serviceInfo_details">
                <ul>
                  <li>15/4/2023</li>
                  <li>First Name</li>
                  <li>Cleaning</li>
                  <li>Sehore</li>
                  <li>344</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceHistory;
