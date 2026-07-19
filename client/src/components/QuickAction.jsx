import { Link } from "react-router-dom";
import "../styles/cards.css";
import LocationCard from "./LocationCard";
import ServiceCard from "./ServiceCard";

function QuickAction({ icon, title, description, to }) {
  return (
    <Link to={to} className="quick-card">
      <div className="quick-icon">
        {icon}
      </div>

      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div
  style={{
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "25px",
    marginTop: "40px",
  }}
>
  <LocationCard />
  <ServiceCard />
</div>
    </Link>
  );
}

export default QuickAction;