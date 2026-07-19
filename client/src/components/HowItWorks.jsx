import {
  TriangleAlert,
  Brain,
  BellRing,
  Navigation,
} from "lucide-react";

import "../styles/workflow.css";

const steps = [
  {
    icon: <TriangleAlert size={40} />,
    title: "Report Emergency",
  },
  {
    icon: <Brain size={40} />,
    title: "AI Analysis",
  },
  {
    icon: <BellRing size={40} />,
    title: "Hospital Alert",
  },
  {
    icon: <Navigation size={40} />,
    title: "Navigation",
  },
];

function HowItWorks() {
  return (
    <section className="workflow" id="workflow">
      <div className="container">

        <p className="section-tag">WORKFLOW</p>

        <h2 className="section-title">
          Four simple steps.
        </h2>

        <div className="steps">

          {steps.map((step, index) => (
            <div className="step-card" key={index}>
              <div className="step-icon">{step.icon}</div>

              <h3>{step.title}</h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default HowItWorks;