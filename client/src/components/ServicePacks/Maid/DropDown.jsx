import React from "react";
import "../DropDown.css";
import { useState } from "react";

function DropDown({ selected, setSelected }) {
  const [isActive, setIsActive] = useState(false);
  const options = ["Dusting @ Rs.200", "Cooking @ Rs.200", "Cleaning @ Rs.200"];

  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        choose {selected}
      </div>
      {isActive && (
        <div className="dropdown-content">
          {options.map((option) => (
            <div
              onClick={(e) => {
                setSelected(option);
                setIsActive(false);
              }}
              className="dropdown-item"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DropDown;
