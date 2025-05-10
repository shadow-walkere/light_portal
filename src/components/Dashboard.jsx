import React from "react";
import Topbar from "./Topbar";
import BasicInfo from "./BasicInfo";
import AcademicInfo from "./AcademicInfo";
import FeePayment from "./FeePayment";

import "../index.css";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <Topbar />
      <div className="main-content">
        <div className="grid-container">
          <BasicInfo />
          <AcademicInfo />
          {/* <FeePayment /> */}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
