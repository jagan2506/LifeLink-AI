import { Link } from "react-router-dom";
import {
  ArrowRight,
  HeartPulse,
  Hospital,
  ShieldCheck,
} from "lucide-react";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <span className="badge">
          AI Powered Emergency Response
        </span>

        <h1>
          One Click Can
          <span> Save A Life.</span>
        </h1>

        <p>
          Connect instantly with nearby hospitals, emergency responders,
          and AI-assisted first aid using real-time location and intelligent
          emergency management.
        </p>

        <div className="hero-buttons">

          <Link to="/emergency" className="primary-btn">
            🚨 Report Emergency
          </Link>

          <Link to="/hospital" className="secondary-btn">
            <Hospital size={18} />
            Hospital Dashboard
          </Link>

        </div>

        <div className="hero-features">

          <div>
            <HeartPulse color="#ef4444" />
            <span>AI First Aid</span>
          </div>

          <div>
            <ShieldCheck color="#16a34a" />
            <span>Secure Platform</span>
          </div>

          <div>
            <ArrowRight color="#2563eb" />
            <span>Fast Response</span>
          </div>

        </div>

      </div>

      <div className="hero-right">

        <div className="dashboard-card">

          <div className="status live"></div>

          <h3>Emergency Active</h3>

          <p>Road Accident</p>

          <div className="location-card">

            <strong>Current Location</strong>

            <p>Anna Nagar, Chennai</p>

          </div>

          <div className="hospital-card">

            <strong>Nearest Hospital</strong>

            <p>Apollo Hospital</p>

            <span>2.4 KM</span>

          </div>

          <button>
            Navigate →
          </button>

        </div>

      </div>

    </section>
  );
}

export default Hero;