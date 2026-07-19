import {
  Siren,
  MapPinned,
  Hospital,
  Bot,
} from "lucide-react";

import DashboardNavbar from "../components/DashboardNavbar";
import QuickAction from "../components/QuickAction";
import StatCard from "../components/StatCard";
import { useNavigate } from "react-router-dom";
import "../styles/dashboard.css";

function CitizenDashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-page">
      <DashboardNavbar />

      <div className="dashboard-content">
        <h1 className="dashboard-title">
          👋 Welcome, Jagan
        </h1>

        <p className="dashboard-subtitle">
          Stay prepared. Report emergencies quickly and help save lives.
        </p>

        <div className="dashboard-grid">
          <StatCard
            title="Nearby Hospitals"
            value="12"
            color="#2563eb"
          />

          <StatCard
            title="Emergency Requests"
            value="5"
            color="#dc2626"
          />

          <StatCard
            title="Response Time"
            value="5s"
            color="#16a34a"
          />
        </div>

        <div className="sos-wrapper">
          <button className="sos-button" onClick={() => navigate("/emergency")}>
            🚨 SOS
          </button>
        </div>

        <div className="dashboard-grid">
          <QuickAction
            icon={<Siren size={30} />}
            title="Report Emergency"
            description="Create a new emergency request."
            to="/emergency"
          />

          <QuickAction
            icon={<MapPinned size={30} />}
            title="Share Location"
            description="Send your live GPS location."
            to="/emergency"
          />

          <QuickAction
            icon={<Hospital size={30} />}
            title="Nearby Hospitals"
            description="Find hospitals around you."
            to="/hospital"
          />

          <QuickAction
            icon={<Bot size={30} />}
            title="AI Assistant"
            description="Get AI-powered first aid guidance."
            to="/dashboard"
          />
        </div>
      </div>
    </div>
  );
}

export default CitizenDashboard;