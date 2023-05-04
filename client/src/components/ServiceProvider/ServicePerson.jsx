import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getUserToken } from "./../../utils/cookies/getUserToken";
import "./ServiceProvider.css";
import sampleWorker from "./images/sampleWorker.png";

function ServicePerson({
    handyman_id,
    name,
    address,
    experience,
    jobsCompleted,
    imageSrc,
}) {
    const location = useLocation();
    const user_id = getUserToken();

    const lat = new URLSearchParams(location.search).get("lat");
    const long = new URLSearchParams(location.search).get("long");
    const cost = new URLSearchParams(location.search).get("cost");

    const [isLoading, setIsLoading] = useState(false);
    const [isAccepted, setIsAccepted] = useState(false);

    const handleSelect = () => {
        setIsLoading(true);
        fetch(`${process.env.REACT_APP_BACKEND_API}/api/createnotification`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                message: "New booking request",
                user_id: user_id,
                handyman_id: handyman_id,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setIsLoading(false);
                setIsAccepted(data.status === "active");
            });
    };

    return (
        <div className="servicePerson_main">
            <div className="servicePerson_content">
                <div className="servicePerson_image">
                    <img src={sampleWorker} alt="" />
                </div>
                <div className="servicePerson_info">
                    <div className="servicePerson_name">{name}</div>
                    <div className="servicePerson_address">{address}</div>
                    <div className="servicePerson_experience">
                        {experience} years of experience
                    </div>
                    <div className="servicePerson_jobsDone">
                        {jobsCompleted} jobs completed
                    </div>
                </div>
            </div>
            <div className="servicePerson_button">
                {isLoading ? (
                    <div>Loading...</div>
                ) : isAccepted ? (
                    <Link
                        to={`/user/bookingsummary?lat=${lat}&long=${long}&cost=${cost}&handyman_id=${handyman_id}`}
                        style={{ color: "inherit" }}
                    >
                        <button>Select</button>
                    </Link>
                ) : (
                    <button onClick={handleSelect}>Select</button>
                )}
            </div>
        </div>
    );
}

export default ServicePerson;
