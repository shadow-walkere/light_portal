// import React from "react";
// import { Routes, Route, Navigate, Outlet } from "react-router-dom";

// import Sidebar from "./components/sidebar";
// import LoginSignup from "./components/LoginSignup";
// import Dashboard from "./components/Dashboard";
// import Profile from "./components/Profile";
// import Library from "./components/Library";
// import FeeStructure from "./components/FeeStructure";

// const ProtectedLayout = () => {
//   const isLoggedIn = !!localStorage.getItem("token");

//   if (!isLoggedIn) {
//     return <Navigate to="/" replace />;
//   }

//   return (
//     <>
//       <Sidebar />
//       <div
//         className="main-content"
//         style={{ marginLeft: "220px", padding: "1rem" }}
//       >
//         <Outlet />
//       </div>
//     </>
//   );
// };

// const App = () => {
//   const isLoggedIn = !!localStorage.getItem("token");

//   return (
//     <Routes>
//       <Route
//         path="/"
//         // element={
//         //   isLoggedIn ? <Navigate to="/dashboard" /> : <LoginSignup />
//         // }
//         element={<Dashboard />}
//       />
//       <Route element={<ProtectedLayout />}>
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/profile" element={<Profile />} />
//         <Route path="/FeeStructure" element={<FeeStructure />} />
//         <Route path="/library" element={<Library />} />
//       </Route>
//       <Route path="*" element={<Navigate to="/" />} />
//     </Routes>
//   );
// };

// export default App;

import React from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";

import Sidebar from "./components/sidebar";
import LoginSignup from "./components/LoginSignup";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Library from "./components/Library";
import FeeStructure from "./components/FeeStructure";
import Discipline from "./components/Discipline";
import AcademicInfo from "./components/AcademicInfo";
import ScrollToTop from "./components/scrollTop";

const ProtectedLayout = () => {
  const isLoggedIn = !!localStorage.getItem("token");

  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="flex h-screen">
       <ScrollToTop />
      <Sidebar />
      <div className="flex-1 p-6 bg-gray-100 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

const App = () => {
  const isLoggedIn = !!localStorage.getItem("token");

  return (
    <Routes>
      {/* Public Login Route */}
      <Route
        path="/"
        element={
          isLoggedIn ? <Navigate to="/dashboard" replace /> : <LoginSignup />
        }
      />

      {/* Protected Routes with Sidebar */}
      <Route element={<ProtectedLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/discipline" element={<Discipline />} />
        <Route path="/discipline" element={<Discipline />} />
        <Route path="/academics" element={<AcademicInfo />} />
        <Route path="/feestructure" element={<FeeStructure />} />
        <Route path="/library" element={<Library />} />
      </Route>

      {/* Catch-all */}
      <Route path="*" element={<Navigate to="/dashboard" />} />
    </Routes>
  );
};

export default App;
