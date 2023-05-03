import React from "react";
import { Link, useParams } from "react-router-dom";
import "../ServicePacks.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DropDown from "../../../utils/DropDown";
import Map from "../../../utils/Map";
import useGeoLocation from "../../../utils/useGeoLocation";
import Services_Navbar from "./Services_Navbar";

function Service() {
    const navigate = useNavigate();

    const { serviceName } = useParams(); // get the name from the URL
    const [selected, setSelected] = useState("");

    const location = useGeoLocation(); //getting current location of the user

    const options = [
        "Dusting @ Rs.200",
        "Cooking @ Rs.200",
        "Cleaning @ Rs.200",
    ];

    return (
        <div className="servicePacks_outer">
            <div>
                <Services_Navbar serviceName={serviceName} />
            </div>
            {/* Map */}
            <div className="servicePacks_map">
                <Map
                    lat={location.coordinates.lat}
                    long={location.coordinates.lng}
                />
            </div>
            {/* Form */}
            <div className="servicePacks_serviceInfo_outer">
                <div className="container">
                    <div className="servicePacks_serviceInfo">
                        <div className="servicePacks_input">
                            <div className="servicePacks_input_left">
                                Service Charge
                            </div>
                            <div className="servicePacks_input_right">
                                Rs. 100
                            </div>
                        </div>
                        <div className="servicePacks_input">
                            <div className="servicePacks_input_left">Price</div>
                            <div className="servicePacks_input_right">
                                <DropDown
                                    options={options}
                                    selected={selected}
                                    setSelected={setSelected}
                                />
                            </div>
                        </div>
                        <div className="servicePacks_buttons">
                            <Link
                                to={`/services/serviceProvider?lat=${location.coordinates.lat}&long=${location.coordinates.lng}`}
                                style={{ color: "inherit" }}
                            >
                                <button>Continue</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Service;
