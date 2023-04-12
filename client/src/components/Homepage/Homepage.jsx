import React from "react";
import Homepage_Navbar from "./Components/Homepage_Navbar/Homepage_Navbar";
import JoinOurTeam from "./Components/JoinOurTeam/JoinOurTeam";
import OneClick from "./Components/OneClick/OneClick";
import OurServices from "./Components/OurServices/OurServices";
import "./Homepage.css";

function Homepage() {
    return (
        <>
            <Homepage_Navbar />
            <div className="homepage_content">
                <OurServices />
                <OneClick />
                <JoinOurTeam />
            </div>
        </>
    );
}

export default Homepage;
