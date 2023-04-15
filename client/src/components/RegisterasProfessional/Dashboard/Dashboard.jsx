import React from "react";
import DashboardNavbar from "./DashboardNavbar";
import HandymanProfile from "./HandymanProfile";
import ServiceHistory from "./Service/ServiceHistory";

function Dashboard() {
  return (
    <>
      <DashboardNavbar />
      {/* <HandymanProfile /> */}
      <ServiceHistory />
    </>
  );
}

export default Dashboard;
