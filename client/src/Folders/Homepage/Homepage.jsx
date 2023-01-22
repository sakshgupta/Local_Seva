import React from "react";
import Footer from "../Global Components/Footer/Footer";
import JoinOurTeam from "./Components/JoinOurTeam/JoinOurTeam";
import OneClick from "./Components/OneClick/OneClick";
import OurServices from "./Components/OurServices/OurServices";

function Homepage() {
  return (
    <>
      <OurServices />
      <OneClick />
      <JoinOurTeam />
      <Footer />
    </>
  );
}

export default Homepage;
