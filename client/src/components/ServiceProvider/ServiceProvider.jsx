import React from "react";
import "./ServiceProvider.css";
import ServicePerson from "./ServicePerson";

function ServiceProvider() {
  return (
    <div className="serviceProvider_outer">
      <div className="container">
        <div className="serviceProvider_inner">
          <div className="serviceProvider_heading">
            <h1>Maids near your location </h1>
            <p>Choose one to proceed for the booking</p>
          </div>
          <ServicePerson />
          <ServicePerson />
          <ServicePerson />
          <ServicePerson />
          <ServicePerson />
        </div>
      </div>
    </div>
  );
}

export default ServiceProvider;
