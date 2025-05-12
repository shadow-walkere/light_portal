// import React from "react";
// import Topbar from "./Topbar";
// import BasicInfo from "./BasicInfo";
// import AcademicInfo from "./AcademicInfo";
// import FeePayment from "./FeePayment";

// import "../index.css";

// function Dashboard() {
//   return (
//     <div className="dashboard-container">
//       <Topbar />
//       <div className="main-content">
//         <div className="grid-container">
//           <BasicInfo />
//           <AcademicInfo />
//           <FeePayment />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;

import React from "react";
import { NavLink } from "react-router-dom";
import {
  User,
  Book,
  Calendar,
  FileText,
  BarChart3,
  ClipboardList,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";

const Dashboard = () => {
  const studentName = localStorage.getItem("studentName") || "Janex Wandera";
  const data = [
    { subject: "Math", score: 85 },
    { subject: "English", score: 78 },
    { subject: "Biology", score: 92 },
    { subject: "History", score: 74 },
    { subject: "Physics", score: 88 },
    { subject: "Chemistry", score: 80 },
  ];

  return (
    <div className="p-6 md:p-24 bg-gray-1000 min-h-screen flex-1 overflow-auto mt-[-4rem]">
      {/* Header */}
      <header className="flex items-center justify-between bg-gradient-to-r from-blue-500 to-teal-500 text-white px-6 py-4 mb-8 rounded-lg shadow-lg">
        {/* Left Side: Welcome Message */}
        <div className="flex items-center space-x-3">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVvWFJ0THemUhRjcb-yt___ZdLlc1D-ccCow&s" // Replace with your actual logo path or remove if not needed
            alt="Logo"
            className="w-10 h-10 rounded-full shadow-md"
          />
          <div>
            <div className="text-xl sm:text-2xl font-bold tracking-wide">
              Welcome to Light Academy
            </div>
            <p className="text-sm opacity-90">
              Empowering Students Everyday 🌟
            </p>
          </div>
        </div>

        {/* Right Side: Student Info */}
        <div className="flex items-center space-x-3">
          <div className="bg-white text-blue-700 font-semibold px-3 py-1 rounded-full shadow-inner text-sm">
            Hello, {studentName}
          </div>
          <div className="bg-white p-2 rounded-full shadow-md">
            <User size={28} className="text-blue-700" />
          </div>
        </div>
      </header>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow-xl rounded-lg p-6 flex items-center justify-between hover:scale-105 transition-transform">
          <div className="text-gray-700">
            <div className="text-xl font-semibold">My Courses</div>
            <div className="text-3xl font-bold text-blue-600">6</div>
          </div>
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white p-4 rounded-full">
            <Book size={40} />
          </div>
        </div>

        <div className="bg-white shadow-xl rounded-lg p-6 flex items-center justify-between hover:scale-105 transition-transform">
          <div className="text-gray-700">
            <div className="text-xl font-semibold">Assignments Due</div>
            <div className="text-3xl font-bold text-blue-600">3</div>
          </div>
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white p-4 rounded-full">
            <ClipboardList size={40} />
          </div>
        </div>

        <div className="bg-white shadow-xl rounded-lg p-6 flex items-center justify-between hover:scale-105 transition-transform">
          <div className="text-gray-700">
            <div className="text-xl font-semibold">Upcoming Exams</div>
            <div className="text-3xl font-bold text-blue-600">2</div>
          </div>
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white p-4 rounded-full">
            <Calendar size={40} />
          </div>
        </div>
      </div>

      {/* Performance Chart */}
      <div className="bg-white p-6 rounded-lg shadow-xl mt-8">
        <div className="text-xl font-semibold text-gray-700 mb-4">
          Academic Performance Overview
        </div>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={data}
            margin={{ top: 10, right: 20, bottom: 0, left: -10 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="subject" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="score" fill="#3b82f6" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Quick Access Links */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <NavLink
          to="/profile"
          className="bg-white shadow-xl rounded-lg p-6 flex items-center justify-between hover:scale-105 transition-transform"
        >
          <div className="text-xl font-semibold text-gray-700">My Profile</div>
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white p-4 rounded-full">
            <User size={40} />
          </div>
        </NavLink>

        <NavLink
          to="/feestructure"
          className="bg-white shadow-xl rounded-lg p-6 flex items-center justify-between hover:scale-105 transition-transform"
        >
          <div className="text-xl font-semibold text-gray-700">
            Fee Structure
          </div>
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white p-4 rounded-full">
            <FileText size={40} />
          </div>
        </NavLink>

        <NavLink
          to="/library"
          className="bg-white shadow-xl rounded-lg p-6 flex items-center justify-between hover:scale-105 transition-transform"
        >
          <div className="text-xl font-semibold text-gray-700">
            Library Access
          </div>
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white p-4 rounded-full">
            <Book size={40} />
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Dashboard;

// import React from "react";
// import { NavLink } from "react-router-dom";
// import { Home, User, FileText, Calendar, Book, BarChart } from "lucide-react";

// const Dashboard = () => {
//   return (

//     <div className="p-6 md:p-20 bg-gray-50 min-h-screen flex-1">
//       {/* Header */}
//       <header className="flex items-center justify-between border-b pb-6 mb-8 rounded-t-lg bg-white shadow-md">
//         <div className="text-3xl font-semibold text-blue-600">Welcome to Light Academy</div>
//         <div className="flex items-center space-x-4">
//           <div className="text-gray-700">Hello, Admin</div>
//           <div className="bg-blue-600 p-2 rounded-full text-white">
//             <User size={24} />
//           </div>
//         </div>
//       </header>

//       {/* Dashboard cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         <div className="bg-white shadow-xl rounded-lg p-6 flex items-center justify-between hover:transform hover:scale-105 hover:shadow-2xl transition">
//           <div className="text-gray-700">
//             <div className="text-xl font-semibold">Total Students</div>
//             <div className="text-3xl font-bold text-blue-600">1,245</div>
//           </div>
//           <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white p-4 rounded-full">
//             <Home size={40} />
//           </div>
//         </div>

//         <div className="bg-white shadow-xl rounded-lg p-6 flex items-center justify-between hover:transform hover:scale-105 hover:shadow-2xl transition">
//           <div className="text-gray-700">
//             <div className="text-xl font-semibold">Pending Reports</div>
//             <div className="text-3xl font-bold text-blue-600">15</div>
//           </div>
//           <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white p-4 rounded-full">
//             <FileText size={40} />
//           </div>
//         </div>

//         <div className="bg-white shadow-xl rounded-lg p-6 flex items-center justify-between hover:transform hover:scale-105 hover:shadow-2xl transition">
//           <div className="text-gray-700">
//             <div className="text-xl font-semibold">Academic Records</div>
//             <div className="text-3xl font-bold text-blue-600">345</div>
//           </div>
//           <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white p-4 rounded-full">
//             <Book size={40} />
//           </div>
//         </div>
//       </div>

//       {/* Graph Section */}
//       <div className="mt-8">
//         <div className="bg-white p-6 rounded-lg shadow-xl">
//           <div className="text-xl font-semibold text-gray-700 mb-4">Performance Overview</div>
//           <div className="h-64 bg-gradient-to-r from-blue-200 to-blue-400 rounded-lg flex justify-center items-center text-gray-500">
//             <BarChart size={50} />
//             <p>Chart Coming Soon</p>
//           </div>
//         </div>
//       </div>

//       {/* Quick Links Section */}
//       <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         <NavLink
//           to="/profile"
//           className="bg-white shadow-xl rounded-lg p-6 flex items-center justify-between hover:transform hover:scale-105 hover:shadow-2xl transition"
//         >
//           <div className="text-xl font-semibold text-gray-700">My Profile</div>
//           <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white p-4 rounded-full">
//             <User size={40} />
//           </div>
//         </NavLink>
//         <NavLink
//           to="/feestructure"
//           className="bg-white shadow-xl rounded-lg p-6 flex items-center justify-between hover:transform hover:scale-105 hover:shadow-2xl transition"
//         >
//           <div className="text-xl font-semibold text-gray-700">Fee Structure</div>
//           <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white p-4 rounded-full">
//             <Calendar size={40} />
//           </div>
//         </NavLink>
//         <NavLink
//           to="/library"
//           className="bg-white shadow-xl rounded-lg p-6 flex items-center justify-between hover:transform hover:scale-105 hover:shadow-2xl transition"
//         >
//           <div className="text-xl font-semibold text-gray-700">Library</div>
//           <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white p-4 rounded-full">
//             <Book size={40} />
//           </div>
//         </NavLink>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
