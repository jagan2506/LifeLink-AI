import { Routes, Route } from "react-router-dom";

import Landing from "../pages/Landing";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CitizenDashboard from "../pages/CitizenDashboard";
import EmergencyForm from "../pages/EmergencyForm";
import HospitalDashboard from "../pages/HospitalDashboard";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<CitizenDashboard />} />
      <Route path="/emergency" element={<EmergencyForm />} />
      <Route path="/hospital" element={<HospitalDashboard />} />
    <Route path="/login" element={<Login />} />

<Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default AppRoutes;