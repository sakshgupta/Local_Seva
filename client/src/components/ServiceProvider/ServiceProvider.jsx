import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ServicePerson from "./ServicePerson";
import "./ServiceProvider.css";

function ServiceProvider() {
    const location = useLocation();

    const serviceSelected = new URLSearchParams(location.search).get("service");
    const [handymen, setHandymen] = useState(null);
    const [sortedHandymen, setSortedHandymen] = useState(null);
    const [lat, setLat] = useState(null);
    const [long, setLong] = useState(null);

    useEffect(() => {
        const fetchHandymen = async () => {
            await fetch(
                `${process.env.REACT_APP_BACKEND_API}/api/handyman/getallhandyman`
            )
                .then((response) => response.json())
                .then((handymen) => setHandymen(handymen));
        };

        fetchHandymen();
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

    function deg2rad(deg) {
        return deg * (Math.PI / 180);
    }

    useEffect(() => {
        // assuming serviceSelected is a string containing the selected service
        const filteredHandymen = handymen?.filter(
            (handyman) => handyman.services.toLowerCase() === serviceSelected
        );
        // Fetch handymen data from the backend
        setLat(new URLSearchParams(location.search).get("lat"));
        setLong(new URLSearchParams(location.search).get("long"));

        // Sort handymen based on their distance from the user
        const sortedHandymen = filteredHandymen?.sort((a, b) => {
            const distanceA = calculateDistance(lat, long, a.lat, a.long);
            const distanceB = calculateDistance(lat, long, b.lat, b.long);
            return distanceA - distanceB;
        });
        setSortedHandymen(sortedHandymen);
        // console.log(sortedHandymen);
    }, [handymen, lat, long]);

    return (
        <div className="serviceProvider_outer">
            <div className="container">
                <div className="serviceProvider_inner">
                    <div className="serviceProvider_heading">
                        <h1>Maids near your location</h1>
                        <p>Choose one to proceed for the booking</p>
                    </div>
                    {sortedHandymen?.map((Provider) => (
                        <ServicePerson
                            key={Provider.handyman_id}
                            {...Provider}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ServiceProvider;
