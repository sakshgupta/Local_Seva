import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./handymanProfile.css";
import DashboardNavbar from "./DashboardNavbar";

function HandymanProfile() {
    const location = useLocation();
    const handyman_id = new URLSearchParams(location.search).get("handyman_id");
    const [handymanData, setHandymanData] = useState("");

    useEffect(() => {
        const fetchHandyman = async () => {
            const response = await fetch(
                `${process.env.REACT_APP_BACKEND_API}/api/handyman/gethandyman`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        handyman_id: handyman_id,
                    }),
                }
            );
            try {
                const data = await response.json();
                // console.log(data);

                if (response.status == 200) {
                    setHandymanData(data);
                } else {
                    console.error(`Failed with status code ${response.status}`);
                }
            } catch (error) {
                console.error("Invalid JSON string:", error.message);
            }
        };
        fetchHandyman();
    }, []);

    return (
        <>
            <DashboardNavbar />
            <div className="handymanProfile_details_outer">
                <div className="container">
                    <div className="handymanProfile_details">
                        <div className="handyman_photograph">
                            <img src={handymanData?.profile} alt="" />
                        </div>
                        <div className="handyman_details_container">
                            <div className="handyman_details handyman_name">
                                Name: {handymanData?.name}
                            </div>
                            <div className="handyman_details handyman_phone">
                                Phone Number: +91 {handymanData?.phone}
                            </div>
                            <div className="handyman_details handyman_occupation">
                                Occupation: {handymanData?.services}
                            </div>
                            <div className="handyman_details handyman_address">
                                AadharNumber: {handymanData?.aadharNumber}
                            </div>
                            <div className="handyman_details handyman_dob">
                                Joined on: {handymanData?.createdAt?.slice(0, 10)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HandymanProfile;
