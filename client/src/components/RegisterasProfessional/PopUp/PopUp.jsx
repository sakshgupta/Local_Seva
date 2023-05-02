import React from "react";
import "./PopUp.css";

function PopUp() {
  return (
    <>
      <div className="popup_inside">
        <div className="popup_heading">
          Maid service requested from 1km away
        </div>
        <div className="popup_button">
          <div className="popup_accept">
            <button>Accept</button>
          </div>
          <div className="popup_decline">
            <button>Decline</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PopUp;
