import Topbar from "./Topbar";
import BasicInfo from "./BasicInfo";
import AcademicInfo from "./AcademicInfo";
import FeePayment from "./FeePayment";

import "../index.css";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="main-content">
        <Topbar />
        <div className="info-section">
          <BasicInfo />
          <div className="flex-row">
            <AcademicInfo />
            <FeePayment />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
