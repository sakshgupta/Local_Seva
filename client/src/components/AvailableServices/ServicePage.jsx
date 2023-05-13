import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import availableServices from "../../utils/AvailableServices";
import { getUserToken } from "../../utils/cookies/getUserToken";
import IndividualServices from "./IndividualServices";
import "./ServicePage.css";

function ServicePage() {
    const navigate = useNavigate();
    const [searchInput, setSearchInput] = useState("");
    const user_id = getUserToken();

    useEffect(() => {
        if (user_id == undefined) {
            toast.error("You need to login first");
            navigate("/user/login");
        }
    }, []);

    function handleSearchInputChange(event) {
        setSearchInput(event.target.value);
    }

    function servicesIndividual(serviceDetails) {
        return (
            <IndividualServices
                key={serviceDetails.id}
                serviceName={serviceDetails.serviceName}
                serviceInfo={serviceDetails.serviceInfo}
                serviceImage={serviceDetails.serviceImage}
                serviceTime={serviceDetails.serviceTime}
                serviceURL={`/services/${serviceDetails.serviceName.toLowerCase()}`}
            />
        );
    }

    const filteredServices = availableServices.filter((service) =>
        service.serviceName.toLowerCase().includes(searchInput.toLowerCase())
    );

    return (
        <div className="service_page_main">
            <div className="container">
                <div className="services_provided_container">
                    <div className="services_search">
                        <input
                            type="text"
                            placeholder="What do you need?"
                            value={searchInput}
                            onChange={handleSearchInputChange}
                        />
                    </div>
                    <p>Available Services</p>
                    {filteredServices.map(servicesIndividual)}
                </div>
            </div>
        </div>
    );
}

export default ServicePage;
