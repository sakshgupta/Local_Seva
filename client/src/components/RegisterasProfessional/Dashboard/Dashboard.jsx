import React from "react";
import DashboardNavbar from "./DashboardNavbar";
import HandymanProfile from "./HandymanProfile";
import ServiceHistory from "./Service/ServiceHistory";
import PopUp from "../PopUp/PopUp";
import "../PopUp/PopUp.css";

function Dashboard() {
  return (
    <>
      <DashboardNavbar />
      {/* <HandymanProfile /> */}
      <ServiceHistory />
      <div className="popUp_container">
        <PopUp />
      </div>
    </>
  );
}

export default Dashboard;
