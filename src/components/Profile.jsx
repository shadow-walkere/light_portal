function Profile() {
  return (
    <div className="info-card profile-card">
      <div className="profile-header">
        <img
          src="https://via.placeholder.com/100"
          alt="Student Avatar"
          className="avatar"
        />
        <div>
          <h2>JANEX WANDERA</h2>
          <p className="sub-text">Form Four | Light Academy</p>
        </div>
      </div>

      <div className="profile-details">
        <div className="detail">
          <span className="label">Student ID:</span>
          <span>LA102345</span>
        </div>
        <div className="detail">
          <span className="label">Email:</span>
          <span>ja.wandera@lightacademy.edu</span>
        </div>
        <div className="detail">
          <span className="label">Phone:</span>
          <span>+254745096003</span>
        </div>
        <div className="detail">
          <span className="label">Date of Birth:</span>
          <span>March 12, 2009</span>
        </div>
        <div className="detail">
          <span className="label">Enrolled Since:</span>
          <span>August 2023</span>
        </div>
      </div>
    </div>
  );
}

export default Profile;
