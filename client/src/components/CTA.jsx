import { Link } from "react-router-dom";
import "../styles/cta.css";

function CTA() {
  return (
    <section className="cta-section">
      <div className="container cta-box">

        <h2>
          Every Second Matters During An Emergency
        </h2>

        <p>
          Report emergencies instantly and notify nearby hospitals with your
          live location.
        </p>

        <div className="cta-buttons">

          <Link to="/emergency" className="primary-btn">
            🚨 Report Emergency
          </Link>

          <Link to="/hospital" className="secondary-btn">
            Hospital Dashboard
          </Link>

        </div>

      </div>
    </section>
  );
}

export default CTA;