import React from "react";
import "./ServicePage.css";
import IndividualServices from "./IndividualServices";
import availableServices from "../../utils/AvailableServices";

function ServicePage() {
  function servicesIndividual(serviceDetails) {
    return (
      <IndividualServices
        key={serviceDetails.id}
        serviceName={serviceDetails.serviceName}
        serviceInfo={serviceDetails.serviceInfo}
        serviceImage={serviceDetails.serviceImage}
        serviceTime={serviceDetails.serviceTime}
      />
    );
  }
  console.log(availableServices);

  return (
    <div className="service_page_main">
      <div className="container">
        <div className="services_provided_container">
          <div className="services_provided_buttons">
            <div className="services_provided_duration">
              <button>Book Now</button>
            </div>
          </div>
          <div className="services_search">
            <input type="text" placeholder="What do you need?" />
          </div>
          <p>Available Services</p>
          {availableServices.map(servicesIndividual)}
        </div>
      </div>
    </div>
  );
}

export default ServicePage;
