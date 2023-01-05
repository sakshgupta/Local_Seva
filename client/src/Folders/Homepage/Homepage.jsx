import React from "react";
import JoinOurTeam from "./Components/JoinOurTeam/JoinOurTeam";
import OneClick from "./Components/OneClick/OneClick";
import OurServices from "./Components/OurServices/OurServices";

function Homepage() {
  return (
    <>
      <OurServices />
      <OneClick />
      <JoinOurTeam />
    </>
  );
}

export default Homepage;
