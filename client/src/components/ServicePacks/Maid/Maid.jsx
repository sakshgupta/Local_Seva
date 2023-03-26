import React from "react";
import "../ServicePacks.css";
import map from "../images/Map.png";
import DropDown from "./DropDown";
import { useState } from "react";

function Maid() {
  const [selected, setSelected] = useState("");

  return (
    <div className="servicePacks_outer">
      <div className="servicePacks_map"></div>
      <div className="servicePacks_serviceInfo_outer">
        <div className="container">
          <div className="servicePacks_serviceInfo">
            <div className="servicePacks_input">
              <div className="servicePacks_input_left">Service Charge</div>
              <div className="servicePacks_input_right">Rs. 100</div>
            </div>
            <div className="servicePacks_input">
              <div className="servicePacks_input_left">Price</div>
              <div className="servicePacks_input_right">
                <DropDown selected={selected} setSelected={setSelected} />
              </div>
            </div>
            <div className="servicePacks_buttons">
              <button>Continue</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Maid;
