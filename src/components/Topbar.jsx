import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../components/Topbar.css";

function Topbar() {
  const [avatar, setAvatar] = useState("/default-avatar.png");
  const [showDropdown, setShowDropdown] = useState(false);
  // const [showProfile, setShowProfile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedAvatar = localStorage.getItem("avatar");
    if (savedAvatar) setAvatar(savedAvatar);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loginObj");
    localStorage.removeItem("adminToken");
    localStorage.removeItem("token"); // Important: also remove token
    navigate("/LoginSignup");
  };
  const showProfile = () => {
    if (showProfile) {
      <NavLink to="/profile">Profile</NavLink>;
    }
  };

  return (
    <div className="topbar">
      <input type="text" placeholder="Search..." className="search-bar" />

      <div
        className="user-profile"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <img src={avatar} alt="Profile" className="profile-pic" />
        <span className="username">JANEX WANDERA</span>

        {showDropdown && (
          <div className="dropdown-menu">
            <div className="dropdown-item">Profile</div>
            <button onClick={showProfile} className="view-profile">
              Profile
            </button>
            <div className="dropdown-item">Settings</div>
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Topbar;
