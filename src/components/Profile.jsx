import React, { useState } from "react";
import { Edit3, Save, CheckCircle2 } from "lucide-react";

function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const [profileData, setProfileData] = useState({
    fullName: "JANEX WANDERA",
    schoolLevel: "Form Four | Light Academy",
    studentId: "LA102345",
    email: "ja.wandera@lightacademy.edu",
    phone: "+254745096003",
    dob: "March 12, 2009",
    enrolledSince: "August 2023",
  });

  const toggleEdit = () => {
    if (isEditing) {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 md:mt-0 p-12 md:p-40 bg-white rounded-xl shadow-xl overflow-auto md:ml-28 md:mr-28">
      {/* Header */}
      <div className="flex items-center justify-between border-b pb-6 mb-6">
        <div className="flex items-center space-x-6">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVvWFJ0THemUhRjcb-yt___ZdLlc1D-ccCow&s"
            alt="Student Avatar"
            className="w-28 h-28 rounded-full object-cover border-4 border-blue-500"
          />
          <div>
            {isEditing ? (
              <>
                <input
                  name="fullName"
                  value={profileData.fullName}
                  onChange={handleChange}
                  className="text-3xl font-bold text-blue-600 w-full border border-gray-300 rounded-md px-2 py-1"
                />
                <input
                  name="schoolLevel"
                  value={profileData.schoolLevel}
                  onChange={handleChange}
                  className="text-lg mt-1 text-gray-500 w-full border border-gray-300 rounded-md px-2 py-1"
                />
              </>
            ) : (
              <>
                <h2 className="text-3xl font-bold text-blue-600">{profileData.fullName}</h2>
                <p className="text-gray-500 text-lg mt-1">{profileData.schoolLevel}</p>
              </>
            )}
          </div>
        </div>

        <button
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          onClick={toggleEdit}
        >
          {isEditing ? <Save size={18} /> : <Edit3 size={18} />}
          {isEditing ? "Save" : "Edit"}
        </button>
      </div>

      {/* Details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
        {[
          { label: "Student ID", name: "studentId" },
          { label: "Email", name: "email" },
          { label: "Phone", name: "phone" },
          { label: "Date of Birth", name: "dob" },
          { label: "Enrolled Since", name: "enrolledSince" },
        ].map((item) => (
          <div key={item.name}>
            <p className="text-sm text-gray-500">{item.label}</p>
            {isEditing ? (
              <input
                name={item.name}
                value={profileData[item.name]}
                onChange={handleChange}
                className="text-lg font-semibold w-full border border-gray-300 rounded-md px-2 py-1"
              />
            ) : (
              <p className="text-lg font-semibold">{profileData[item.name]}</p>
            )}
          </div>
        ))}
      </div>

      {/* Toast Message */}
      {showToast && (
        <div className="fixed bottom-6 right-6 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 animate-fade-in-out">
          <CheckCircle2 size={18} />
          <span>Profile updated successfully!</span>
        </div>
      )}
    </div>
  );
}

export default Profile;
