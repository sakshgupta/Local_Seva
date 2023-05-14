import React from "react";
import "./PopUp.css";
import { useNavigate } from "react-router-dom";

function PopUp(props) {
    const navigate = useNavigate();
    const { notificationData } = props;
    
    const handleAccept = () => {
        fetch(`${process.env.REACT_APP_BACKEND_API}/api/acceptnotification`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                handyman_id: notificationData[0].handyman_id,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                // console.log(data);
                navigate(
                    `/handyman/jobstartotp?user_id=${notificationData[0].user_id}`
                );
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const handleDecline = () => {
        fetch(`${process.env.REACT_APP_BACKEND_API}/api/rejectnotification`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                handyman_id: notificationData[0].handyman_id,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                // console.log(data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <>
            <div className="popup_inside">
                <div className="popup_heading">
                    Your service is requested
                </div>
                <div className="popup_button">
                    <div className="popup_accept">
                        <button onClick={handleAccept}>Accept</button>
                    </div>
                    <div className="popup_decline">
                        <button onClick={handleDecline}>Decline</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PopUp;
