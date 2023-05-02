import React, { useState } from "react";
import "./DropDown.css";
import dropdown from "./images/drop-down.png";

function Dropdown({ options, selected, setSelected }) {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="dropdown">
            <div
                className="dropdown-btn"
                onClick={() => setIsActive(!isActive)}
            >
                {selected || "Select an option"}
                <img src={dropdown} alt="" className="dropdown-down-btn" />
            </div>
            {isActive && (
                <div className="dropdown-content">
                    {options.map((option) => (
                        <div
                            onClick={() => {
                                setSelected(option);
                                setIsActive(false);
                            }}
                            className="dropdown-item"
                            key={option}
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Dropdown;
