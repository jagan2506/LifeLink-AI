import { Bell, UserCircle2, HeartPulse } from "lucide-react";
import "../styles/dashboard.css";

function DashboardNavbar() {
  return (
    <nav className="dashboard-navbar">
      <div className="dashboard-logo">
        <HeartPulse size={28} />
        <h2>LifeLink AI</h2>
      </div>

      <div className="dashboard-right">
        <button className="icon-btn">
          <Bell size={22} />
        </button>

        <div className="profile">
          <UserCircle2 size={38} />
        </div>
      </div>
    </nav>
  );
}

export default DashboardNavbar;