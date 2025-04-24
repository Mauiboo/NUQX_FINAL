import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import HomePage from "./pages/HomePage.jsx";
import StaffApp from "./pages/Staff/StaffApp.js";
import KioskApp from "./pages/KIOSK/src/KioskApp";
import DepartmentHeadApp from "./pages/DepartmentHead/DepartmentHeadApp";
import MonitorDisplay from "./pages/MonitorDisplay/src/MonitorDisplay";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/staff/*" element={<StaffApp />} />
        <Route path="/kiosk/*" element={<KioskApp />} />
        <Route path="/departmenthead/*" element={<DepartmentHeadApp />} />
        <Route path="/monitordisplay/*" element={<MonitorDisplay />} />

      </Routes>
    </Router>
  );
}

export default App;
