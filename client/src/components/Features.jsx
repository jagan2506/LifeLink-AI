import {
  Brain,
  MapPinned,
  Hospital,
  BellRing,
  ShieldCheck,
  Languages,
} from "lucide-react";

import "../styles/features.css";

const features = [
  {
    icon: <Brain size={34} />,
    title: "AI First Aid",
    desc: "Receive instant first-aid guidance while emergency responders are on the way.",
  },
  {
    icon: <MapPinned size={34} />,
    title: "Live Location",
    desc: "Share your real-time location with hospitals using GPS.",
  },
  {
    icon: <Hospital size={34} />,
    title: "Hospital Network",
    desc: "Connect instantly to nearby hospitals and emergency services.",
  },
  {
    icon: <BellRing size={34} />,
    title: "Instant Alerts",
    desc: "Hospitals receive emergency notifications immediately.",
  },
  {
    icon: <ShieldCheck size={34} />,
    title: "Secure Platform",
    desc: "Emergency information is securely transmitted and stored.",
  },
  {
    icon: <Languages size={34} />,
    title: "Multi-language",
    desc: "Designed to support users in multiple regional languages.",
  },
];

function Features() {
  return (
    <section className="features-section" id="features">
      <div className="container">
        <p className="section-tag">FEATURES</p>

        <h2 className="section-title">
          Everything needed during an emergency.
        </h2>

        <div className="feature-grid">
          {features.map((item, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">{item.icon}</div>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;