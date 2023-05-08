import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./BookingDone.css";
import call from "./images/call.png";
import confirm from "./images/confirm.png";
import profilecircle from "./images/profilecircle.png";

function BookingDone() {
    const location = useLocation();
    const navigate = useNavigate();

    const lat = new URLSearchParams(location.search).get("lat");
    const long = new URLSearchParams(location.search).get("long");
    const cost = new URLSearchParams(location.search).get("cost");
    const gst = Math.round(cost * 0.18);
    const total = 100 + parseFloat(cost) + parseFloat(gst) - parseFloat(gst);
    const handyman_id = new URLSearchParams(location.search).get("handyman_id");

    const [handymanData, setHandymanData] = useState("");

    useEffect(() => {
        const fetchHandymanDetails = async () => {
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
                if (response.status === 200) {
                    toast.success(data.msg);
                    setHandymanData(data);
                } else {
                    console.error(`Failed with status code ${response.status}`);
                    toast.error(data.msg);
                }
            } catch (error) {
                console.error("Invalid JSON string:", error.message);
            }
        };

        fetchHandymanDetails();
    }, []);

    // calculate the distance between two points using the haversine formula
    function calculateDistance(lat1, lon1, lat2, lon2) {
        const R = 6371; // Earth's radius in km
        const dLat = deg2rad(lat2 - lat1);
        const dLon = deg2rad(lon2 - lon1);
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(deg2rad(lat1)) *
                Math.cos(deg2rad(lat2)) *
                Math.sin(dLon / 2) *
                Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const d = R * c; // Distance in km
        return d;
    }

    // Convert degrees to radians
    function deg2rad(deg) {
        return deg * (Math.PI / 180);
    }

    // Estimate the time it will take for the handyman to reach the user's location
    function estimateTimeOfArrival(handymanData, userLat, userLong) {
        const distance = calculateDistance(
            handymanData.lat,
            handymanData.long,
            userLat,
            userLong
        );

        const averageSpeed = 30; // km/h
        const timeInHours = distance / averageSpeed;
        const timeInMinutes = timeInHours * 60;
        return timeInMinutes;
    }

    const estimatedTime = estimateTimeOfArrival(handymanData, lat, long);

    const handlePaymentClick = (e) => {
        e.preventDefault();
        navigate(`/user/payment?total=${total}`);
    };

    return (
        <div className="container">
            <div className="bookingdone_uppercontainer">
                <div className="bookingdone_heading">Handyman at HOME</div>
                <div className="cancel_booking">
                    <button>Cancel Booking</button>
                </div>
            </div>
            <div className="booking_middle_container">
                <div className="booking_summary">
                    <div className="booking_summary_heading">
                        <img src={confirm} alt="" />{" "}
                        <span>Booking Confirmed</span>
                    </div>
                    <div className="booking_summary_info">
                        <div className="booking_summary_info_photo">
                            <img src={profilecircle} alt="" />
                        </div>
                        <div className="booking_summary_info_info">
                            A handyman has been assigned at your place today{" "}
                            <br />
                            Our executive will arrive as per schedule <br />
                            An OTP has been sent to your registered Email
                            address, share it with the handyman upon his arrival
                        </div>
                    </div>
                    <div className="booking_summary_time">
                        Handyman will arrive at your location in <br />
                        <span>
                            {parseInt(estimatedTime.toFixed(0)) + 3} min
                        </span>
                    </div>
                </div>
                <div className="booking_payment">
                    <div className="payment_summary_heading">
                        Payment Summary
                    </div>
                    <div className="payment_summary_bill">
                        <div className="payment_bill_total">
                            <div className="payment_text">Service Charges</div>
                            <div className="payment_amount">100</div>
                        </div>
                        <div className="payment_bill_total">
                            <div className="payment_text">Handyman Charges</div>
                            <div className="payment_amount">{cost}</div>
                        </div>
                        <div className="payment_bill_total">
                            <div className="payment_text">GST</div>
                            <div className="payment_amount">{gst}</div>
                        </div>
                        <div className="payment_bill_total">
                            <div className="payment_text">LH Discount</div>
                            <div className="payment_amount">{gst}</div>
                        </div>
                    </div>
                    <div className="payment_summary_total_amount">
                        <div className="payment_bill_total">
                            <div className="payment_text">Total</div>
                            <div className="payment_amount">{total}</div>
                        </div>
                    </div>
                    <div className="payment_paynow">
                        <button onClick={handlePaymentClick}>
                            <span>Pay Now</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="booking_third_container">
                <div className="bookingend_heading">Service Checklist</div>
                <div className="bookingend_text">
                    See what all services you can take from our checklist
                </div>
            </div>
            <div className="booking_end_container">
                <div className="booking_end_text">
                    <div className="bookingend_heading">Booking Confirmed</div>
                    <div className="bookingend_text">
                        Call us in case you face any issue in our service
                    </div>
                </div>
                <div className="booking_end_contact">
                    <button>
                        <img src={call} alt="" /> <span>011-5522 3322 11</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default BookingDone;
