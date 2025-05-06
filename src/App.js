import React from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";

import Sidebar from "./components/sidebar";
import LoginSignup from "./components/LoginSignup";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Library from "./components/Library";
import Financials from "./components/Financials";

const ProtectedLayout = () => {
  const isLoggedIn = !!localStorage.getItem("token");

  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Sidebar />
      <div
        className="main-content"
        style={{ marginLeft: "220px", padding: "1rem" }}
      >
        <Outlet />
      </div>
    </>
  );
};

const App = () => {
  const isLoggedIn = !!localStorage.getItem("token");

  return (
    <Routes>
      <Route
        path="/"
        element={
          isLoggedIn ? <Navigate to="/dashboard" /> : <LoginSignup />
        }
      />
      <Route element={<ProtectedLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/Financials" element={<Financials />} />
        <Route path="/library" element={<Library />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
