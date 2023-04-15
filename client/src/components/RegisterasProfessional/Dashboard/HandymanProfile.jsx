import React from "react";
import "./handymanProfile.css";

function HandymanProfile() {
  return (
    <div className="handymanProfile_details_outer">
      <div className="container">
        <div className="handymanProfile_details">
          <div className="handyman_photograph">
            <img
              src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/user-profile-icon.png"
              alt=""
            />
          </div>
          <div className="handyman_details_container">
            <div className="handyman_details handyman_name">
              Firstname Lastname
            </div>
            <div className="handyman_details handyman_phone">
              +91 Phone Number
            </div>
            <div className="handyman_details handyman_occupation">
              Occupation
            </div>
            <div className="handyman_details handyman_address">Address</div>
            <div className="handyman_details handyman_dob">DD/MM/YYYY</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HandymanProfile;
