import React from "react";
import JoinOurTeam from "./Components/JoinOurTeam/JoinOurTeam";
import OneClick from "./Components/OneClick/OneClick";
import OurServices from "./Components/OurServices/OurServices";
import "./Homepage.css";
import Carousel from "./Components/Carousel/Carousel";

function Homepage() {
  return (
    <>
      <div className="homepage_content">
        <Carousel />
        <OurServices />
        <OneClick />
        <JoinOurTeam />
      </div>
    </>
  );
}

export default Homepage;
