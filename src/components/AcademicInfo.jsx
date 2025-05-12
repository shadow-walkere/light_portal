import React, { useState } from "react";
import "../index.css";

function AcademicInfo() {
  const [isEditing, setIsEditing] = useState(false);
  const [academicData, setAcademicData] = useState({
    currentClass: "Form 4",
    stream: "East",
    admissionYear: "2021",
    status: "Active",
    advisor: "Mr. Muteshi",
    subjects: "Mathematics, Physics, Chemistry, Biology, English",
  });

  const toggleEdit = () => setIsEditing(!isEditing);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAcademicData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="info-card academic-card">
      <div className="academic-header">
        <h2 className="section-title">
          <i className="fas fa-graduation-cap icon"></i> Academic Information
        </h2>
        <button className="calendar-btn" onClick={toggleEdit}>
          {isEditing ? "Save" : "Edit"}
        </button>
      </div>

      <div className="info-block academic-info-grid">
        <div className="academic-item">
          <i className="fas fa-layer-group icon"></i>
          <div>
            <strong>Class:</strong>
            <br />
            {isEditing ? (
              <input
                name="currentClass"
                value={academicData.currentClass}
                onChange={handleChange}
              />
            ) : (
              academicData.currentClass
            )}
          </div>
        </div>
        <div className="academic-item">
          <i className="fas fa-columns icon"></i>
          <div>
            <strong>Stream:</strong>
            <br />
            {isEditing ? (
              <input
                name="stream"
                value={academicData.stream}
                onChange={handleChange}
              />
            ) : (
              academicData.stream
            )}
          </div>
        </div>
        <div className="academic-item">
          <i className="fas fa-calendar icon"></i>
          <div>
            <strong>Year Admitted:</strong>
            <br />
            {isEditing ? (
              <input
                name="admissionYear"
                value={academicData.admissionYear}
                onChange={handleChange}
              />
            ) : (
              academicData.admissionYear
            )}
          </div>
        </div>
        <div className="academic-item">
          <i className="fas fa-check-circle icon"></i>
          <div>
            <strong>Status:</strong>
            <br />
            {isEditing ? (
              <select
                name="status"
                value={academicData.status}
                onChange={handleChange}
              >
                <option>Active</option>
                <option>Suspended</option>
                <option>Graduated</option>
              </select>
            ) : (
              academicData.status
            )}
          </div>
        </div>
        <div className="academic-item">
          <i className="fas fa-user-tie icon"></i>
          <div>
            <strong>Advisor:</strong>
            <br />
            {isEditing ? (
              <input
                name="advisor"
                value={academicData.advisor}
                onChange={handleChange}
              />
            ) : (
              academicData.advisor
            )}
          </div>
        </div>
        <div className="academic-item" style={{ gridColumn: "span 2" }}>
          <i className="fas fa-book icon"></i>
          <div>
            <strong>Subjects:</strong>
            <br />
            {isEditing ? (
              <textarea
                name="subjects"
                value={academicData.subjects}
                onChange={handleChange}
                rows={3}
              />
            ) : (
              academicData.subjects
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AcademicInfo;
