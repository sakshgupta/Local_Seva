import React from "react";
import { Link } from "react-router-dom";
import "./OurServices.css";
import service_1 from "./images/service_1.png";
import service_2 from "./images/service_2.png";
import service_3 from "./images/service_3.png";
import service_4 from "./images/service_4.png";
import service_5 from "./images/service_5.png";
import service_6 from "./images/service_6.png";
import services_bottom from "./images/services_bottom.png";

function OurServices() {
    const services = [
        { id: 1, name: "Carpenter", image: service_1 },
        { id: 2, name: "Maid", image: service_2 },
        { id: 3, name: "Plumber", image: service_3 },
        { id: 4, name: "Garbage Collector", image: service_4 },
        { id: 5, name: "All Rounder", image: service_5 },
        { id: 6, name: "Electrician", image: service_6 },
    ];

    return (
        <div className="outservices_maincontainer">
            <div className="container ourServices">
                <div className="ourServices_heading">Our Services</div>
                <div className="ourServices_services">
                    {services.map((service, index) => (
                        <div className="services_box" key={index}>
                            <Link to={`/services/servicePage`}>
                                <div className="services_image">
                                    <img src={service.image} alt="" />
                                </div>
                                <div className="service_name">
                                    {service.name}
                                </div>
                            </Link>
                        </div>
                    ))}
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
