import React, { useState } from "react";
import "../index.css";

function BasicInfo() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    regNo: "S13/07832/22",
    name: "Janex Wandera",
    gender: "Male",
    email: "ja.wandera@lightacademy.ac.ke",
    dob: "2003-06-16",
    campus: "Light Academy",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleEdit = () => setIsEditing(!isEditing);

  return (
    <div className="info-card profile-card">
      <div className="profile-header-edit">
        <h2 className="section-title">
          <i className="fas fa-user icon"></i> Basic Information
        </h2>
        <button className="calendar-btn" onClick={toggleEdit}>
          {isEditing ? "Save" : "Edit"}
        </button>
      </div>

      <div className="info-columns">
        <div className="info-block">
          <p>
            <strong>Reg. No:</strong>{" "}
            {isEditing ? (
              <input
                name="regNo"
                value={formData.regNo}
                onChange={handleChange}
              />
            ) : (
              <span className="highlight">{formData.regNo}</span>
            )}
          </p>
          <p>
            <strong>Name:</strong>{" "}
            {isEditing ? (
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            ) : (
              formData.name
            )}
          </p>
          <p>
            <strong>Gender:</strong>{" "}
            {isEditing ? (
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option>Male</option>
                <option>Female</option>
              </select>
            ) : (
              formData.gender
            )}
          </p>
          <p>
            <strong>Campus:</strong>{" "}
            {isEditing ? (
              <input
                name="campus"
                value={formData.campus}
                onChange={handleChange}
              />
            ) : (
              formData.campus
            )}
          </p>
        </div>

        <div className="info-block">
          <p>
            <strong>Email:</strong>{" "}
            {isEditing ? (
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            ) : (
              <span className="highlight">{formData.email}</span>
            )}
          </p>
          <p>
            <strong>Date of Birth:</strong>{" "}
            {isEditing ? (
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
              />
            ) : (
              new Date(formData.dob).toLocaleDateString()
            )}
          </p>
          <button className="calendar-btn">
            <i className="fas fa-calendar-alt"></i> Academic Calendar
          </button>
        </div>
      </div>
    </div>
  );
}

export default BasicInfo;
