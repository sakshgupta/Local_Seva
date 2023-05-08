import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { gethandymanToken } from "../../../utils/cookies/getHandymanToken";
import "./Completed.css";
import workdone from "./images/work_done.jpeg";

function Completed() {
    const navigate = useNavigate();
    const handyman_id = gethandymanToken();
    const location = useLocation();

    const user_id = new URLSearchParams(location.search).get("user_id");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(
            `${process.env.REACT_APP_BACKEND_API}/api/workdonecheck`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    handyman_id,
                    user_id,
                }),
            }
        );
        try {
            const data = await response.json();
            if (response.status === 200) {
                toast.success(data.msg);
                setTimeout(() => {
                    navigate(`/handyman/dashboard`);
                }, 3000);
            } else {
                console.error(`Failed with status code ${response.status}`);
                toast.error(data.msg);
            }
        } catch (error) {
            console.error("Invalid JSON string:", error.message);
        }
    };

    return (
        <div className="workCompleted_container">
            <div className="container">
                <div className="workcomplete_main">
                    <div className="workcompleted_image">
                        <img src={workdone} alt="" />
                    </div>
                    <div className="workcompleted_button">
                        <button onClick={handleSubmit}>Work Done?</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Completed;
