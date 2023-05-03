import React from "react";
import "./ServiceProvider.css";
import sampleWorker from "./images/sampleWorker.png";

function ServicePerson({ name, address, experience, jobsCompleted, imageSrc }) {
    return (
        <div className="servicePerson_main">
            <div className="servicePerson_content">
                <div className="servicePerson_image">
                    <img src={sampleWorker} alt="" />
                </div>
                <div className="servicePerson_info">
                    <div className="servicePerson_name">{name}</div>
                    <div className="servicePerson_address">{address}</div>
                    <div className="servicePerson_experience">{experience} years of experience</div>
                    <div className="servicePerson_jobsDone">
                        {jobsCompleted} jobs completed
                    </div>
                </div>
            </div>
            <div className="servicePerson_button">
                <button>Select</button>
            </div>
        </div>
    );
}

export default ServicePerson;
