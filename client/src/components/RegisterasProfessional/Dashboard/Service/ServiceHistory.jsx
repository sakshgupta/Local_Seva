import React, { useEffect, useState } from "react";
import { gethandymanToken } from "../../../../utils/cookies/getHandymanToken";
import "./ServiceHistory.css";

function ServiceHistory() {
    const [userSelected, setUserSelected] = useState([]);
    const handyman_id = gethandymanToken();
    const serviceProvided = userSelected.services;

    useEffect(() => {
        const intervalId = setInterval(() => {
            const getHandyman = async () => {
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
                    setUserSelected(data);
                } catch (error) {
                    console.error("Invalid JSON string:", error.message);
                }
            };

            getHandyman();
        }, 5000); // check for notifications every 5 seconds

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="serviceHistory_outer">
            <div className="container">
                <div className="serviceHistory">
                    <div className="serviceHistory_heading">
                        Your History of Work
                    </div>

                    <div className="serviceHistory_info">
                        <div className="serviceHistory_maincontainer">
                            <div className="serviceInfo_heading serviceInfo_details">
                                <ul>
                                    <li>Date </li>
                                    <li>Customer</li>
                                    <li>Email</li>
                                    <li>Work Done</li>
                                    <li>Contact Number</li>
                                </ul>
                            </div>
                            {userSelected?.usersSelected?.map((user) => (
                                <div
                                    className="serviceInfo_details"
                                    key={user?._id}
                                >
                                    <ul>
                                        <li>{user?.createdAt.slice(0, 10)}</li>
                                        <li>{user?.username} </li>
                                        <li>{user?.email}</li>
                                        <li>{serviceProvided}</li>
                                        <li>{user?.contactNumber}</li>
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServiceHistory;
