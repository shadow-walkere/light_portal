import React, { useState } from "react";
import "../index.css";

function FeePayment() {
  const [isEditing, setIsEditing] = useState(false);
  const [feeData, setFeeData] = useState({
    tuition: "5000",
    examFees: "800",
    sportsFees: "200",
    totalFees: "6000",
    paidAmount: "3000",
    balance: "3000",
  });

  const toggleEdit = () => setIsEditing(!isEditing);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeeData((prev) => ({
      ...prev,
      [name]: value,
      balance: (parseInt(value) - parseInt(feeData.paidAmount)).toString(),
    }));
  };

  return (
    <div className="info-card fee-card">
      <div className="academic-header">
        <h2 className="section-title">
          <i className="fas fa-credit-card icon"></i> Fee Payment Information
        </h2>
        <button className="calendar-btn" onClick={toggleEdit}>
          {isEditing ? "Save" : "Edit"}
        </button>
      </div>

      <div className="fee-info-grid">
        <div className="fee-item">
          <i className="fas fa-book icon"></i>
          <div>
            <strong>Tuition Fee:</strong>
            <br />
            {isEditing ? (
              <input
                type="number"
                name="tuition"
                value={feeData.tuition}
                onChange={handleChange}
              />
            ) : (
              `Ksh. ${feeData.tuition}`
            )}
          </div>
        </div>
        <div className="fee-item">
          <i className="fas fa-pencil-alt icon"></i>
          <div>
            <strong>Exam Fees:</strong>
            <br />
            {isEditing ? (
              <input
                type="number"
                name="examFees"
                value={feeData.examFees}
                onChange={handleChange}
              />
            ) : (
              `Ksh. ${feeData.examFees}`
            )}
          </div>
        </div>
        <div className="fee-item">
          <i className="fas fa-running icon"></i>
          <div>
            <strong>Sports Fees:</strong>
            <br />
            {isEditing ? (
              <input
                type="number"
                name="sportsFees"
                value={feeData.sportsFees}
                onChange={handleChange}
              />
            ) : (
              `Ksh. ${feeData.sportsFees}`
            )}
          </div>
        </div>
        <div className="fee-item">
          <i className="fas fa-wallet icon"></i>
          <div>
            <strong>Total Fees:</strong>
            <br />
            {isEditing ? (
              <input
                type="number"
                name="totalFees"
                value={feeData.totalFees}
                onChange={handleChange}
              />
            ) : (
              `Ksh. ${feeData.totalFees}`
            )}
          </div>
        </div>
        <div className="fee-item">
          <i className="fas fa-money-bill-wave icon"></i>
          <div>
            <strong>Paid Amount:</strong>
            <br />
            {isEditing ? (
              <input
                type="number"
                name="paidAmount"
                value={feeData.paidAmount}
                onChange={handleChange}
              />
            ) : (
              `Ksh. ${feeData.paidAmount}`
            )}
          </div>
        </div>
        <div className="fee-item">
          <i className="fas fa-exclamation-triangle icon"></i>
          <div>
            <strong>Balance:</strong>
            <br />
            {isEditing ? (
              <input
                type="number"
                name="balance"
                value={feeData.balance}
                disabled
                readOnly
              />
            ) : (
              `Ksh. ${feeData.balance}`
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeePayment;
