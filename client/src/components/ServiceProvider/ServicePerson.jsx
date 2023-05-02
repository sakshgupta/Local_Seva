import React from "react";
import "./ServiceProvider.css";
import sampleWorker from "./images/sampleWorker.png";

function ServicePerson() {
  return (
    <div className="servicePerson_main">
      <div className="servicePerson_content">
        <div className="servicePerson_image">
          <img src={sampleWorker} alt="" />
        </div>
        <div className="servicePerson_info">
          <div className="servicePerson_name">Mohd Mubashir Alam</div>
          <div className="servicePerson_address">
            D-1/195,Abul fazal enclave D-1/195,Abul fazal enclave D-1/195,Abul
            fazal enclave
          </div>
          <div className="servicePerson_experience">6 years of Experience</div>
          <div className="servicePerson_jobsDone">5 jobs Completed</div>
        </div>
      </div>
      <div className="servicePerson_button">
        <button>Select</button>
      </div>
    </div>
  );
}

export default ServicePerson;
