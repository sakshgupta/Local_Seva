import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import PopUp from "../PopUp/PopUp";
import "../PopUp/PopUp.css";
import { gethandymanToken } from "./../../../utils/cookies/getHandymanToken";
import DashboardNavbar from "./DashboardNavbar";
import ServiceHistory from "./Service/ServiceHistory";

function Dashboard() {
    const handyman_id = gethandymanToken();
    // TODO got all the data from notification now just show the data in the popup
    const [showNotification, setShowNotification] = useState(false);
    const [notificationData, setNotificationData] = useState("");

    useEffect(() => {
        const intervalId = setInterval(() => {
            const getNotifications = async () => {
                const response = await fetch(
                    `${process.env.REACT_APP_BACKEND_API}/api/getnotification`,
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

                    if (data.length > 0) {
                        setShowNotification(true);
                        setNotificationData(data);
                        const firstNotification = data[0];
                        if (
                            firstNotification.status === "accepted" ||
                            firstNotification.status === "rejected"
                        ) {
                            setShowNotification(false);
                            // clearInterval(intervalId);
                        }
                    } else {
                        setShowNotification(false);
                    }
                    if (response.status === 200) {
                        toast.success(data.msg);
                    } else {
                        console.error(
                            `Failed with status code ${response.status}`
                        );
                        toast.error(data.msg);
                    }
                } catch (error) {
                    console.error("Invalid JSON string:", error.message);
                }
            };
            getNotifications();
        }, 5000); // check for notifications every 5 seconds

        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <DashboardNavbar />
            {/* <HandymanProfile /> */}
            <ServiceHistory />
            {showNotification && (
                <div className="popUp_container">
                    <PopUp notificationData={notificationData} />
                </div>
            )}
        </>
    );
}

export default Dashboard;
