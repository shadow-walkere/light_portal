// import React, { useEffect, useRef, useState } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import { FaBars } from "react-icons/fa";
// import "../index.css";

// const Sidebar = () => {
//   const [showSidebar, setShowSidebar] = useState(false);
//   const sidebarRef = useRef(null);
//   const navigate = useNavigate();

//   const handleClickOutside = (e) => {
//     if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
//       setShowSidebar(false);
//     }
//   };

//   useEffect(() => {
//     if (showSidebar) {
//       document.addEventListener("mousedown", handleClickOutside);
//     } else {
//       document.removeEventListener("mousedown", handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [showSidebar]);

//   const handleLogout = () => {
//     localStorage.removeItem("loginObj");
//     localStorage.removeItem("adminToken");
//     localStorage.removeItem("token"); // Important: also remove token
//     navigate("/LoginSignup");
//   };

//   return (
//     <>
//       <button className="hamburger-btn" onClick={() => setShowSidebar(true)}>
//         <FaBars />
//       </button>

//       {showSidebar && (
//         <div ref={sidebarRef} className="sidebar">
//           <h2 className="sidebar-title">Light Academy</h2>
//           <nav className="sidebar-nav">
//             <NavLink to="/Dashboard">Dashboard</NavLink>
//             <NavLink to="/profile">Profile</NavLink>
//             <NavLink to="/discipline">Rules|Discipline</NavLink>
//             <NavLink to="/FeeStrucure">FeeStructure</NavLink>
//             <NavLink to="/academics">Academic Records</NavLink>
//             <NavLink to="/library">Library</NavLink>
//             <button onClick={handleLogout} className="logout-btn">
//               Logout
//             </button>
//           </nav>
//         </div>
//       )}
//     </>
//   );
// };

// export default Sidebar;
import React, { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { Home, User, Book, FileText, Calendar, LogOut, X } from "lucide-react"; // Importing Lucide icons

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const sidebarRef = useRef(null);
  const navigate = useNavigate();

  const handleClickOutside = (e) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setShowSidebar(false);
    }
  };

  useEffect(() => {
    if (showSidebar) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showSidebar]);

  const handleLogout = () => {
    localStorage.removeItem("loginObj");
    localStorage.removeItem("adminToken");
    localStorage.removeItem("token");
    navigate("/");
  };

  const navItems = [
    { path: "/dashboard", label: "Dashboard", icon: <Home size={20} /> },
    { path: "/profile", label: "Profile", icon: <User size={20} /> },
    { path: "/discipline", label: "Rules | Discipline", icon: <FileText size={20} /> },
    { path: "/feestructure", label: "Fee Structure", icon: <Calendar size={20} /> },
    { path: "/academics", label: "Academic Records", icon: <Book size={20} /> },
    { path: "/library", label: "Library", icon: <Book size={20} /> },
  ];

  return (
    <>
      {/* Mobile Hamburger: Only visible when sidebar is closed */}
      {!showSidebar && (
        <button
          className="md:hidden fixed top-4 left-4 z-50 text-white bg-blue-600 p-2 rounded-md shadow-md"
          onClick={() => setShowSidebar(true)}
        >
          <FaBars size={20} />
        </button>
      )}

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full w-64 bg-blue-700 text-white shadow-xl transform transition-transform duration-300 z-40 ${
          showSidebar ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:relative md:flex md:flex-col`}
      >
        {/* Sidebar close button (only visible on small screens) */}
        <div className="flex justify-end p-4 md:hidden mb-[-4rem]">
          <button onClick={() => setShowSidebar(false)} className="text-white">
            <X size={24} />
          </button>
        </div>

        <div className="p-6 text-2xl font-bold border-b border-blue-500">
          Light Academy
        </div>
        <nav className="flex flex-col gap-2 p-4">
          {navItems.map(({ path, label, icon }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-lg transition-all ${
                  isActive
                    ? "bg-white text-blue-700 font-semibold"
                    : "hover:bg-blue-600"
                }`
              }
              onClick={() => setShowSidebar(false)}
            >
              {icon}
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="mt-auto p-4">
          <button
            onClick={handleLogout}
            className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition"
          >
            <LogOut size={20} className="mr-2 inline" />
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
