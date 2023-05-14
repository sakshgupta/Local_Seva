import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import DropDown from "../../../utils/DropDown";
import Map from "../../../utils/Map";
import useGeoLocation from "../../../utils/useGeoLocation";
import "../ServicePacks.css";
import Services_Navbar from "./Services_Navbar";

function Service() {
    const navigate = useNavigate();

    const { serviceName } = useParams(); // get the name from the URL
    const [selected, setSelected] = useState("");

    const location = useGeoLocation(); //getting current location of the user

    const options = ["50", "120", "200"];

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
                                ₹ 100
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
                            {selected ? (
                                <Link
                                    to={`/services/serviceProvider?service=${serviceName}&lat=${location.coordinates.lat}&long=${location.coordinates.lng}&cost=${selected}`}
                                    style={{ color: "inherit" }}
                                >
                                    <button>Continue</button>
                                </Link>
                            ) : (
                                <button disabled>Select a service</button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Service;
