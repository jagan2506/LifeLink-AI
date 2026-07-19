import { Hospital } from "lucide-react";
import "../styles/cards.css";

const hospitals = [
  {
    name: "Apollo Hospital",
    distance: "2.3 km",
    status: "Available",
  },
  {
    name: "Government Hospital",
    distance: "4.5 km",
    status: "Available",
  },
  {
    name: "SIMS Hospital",
    distance: "5.1 km",
    status: "Available",
  },
];

function ServiceCard() {
  return (
    <div className="info-card">
      <div className="card-header">
        <Hospital size={24} />
        <h3>Nearby Hospitals</h3>
      </div>

      {hospitals.map((hospital, index) => (
        <div className="hospital-item" key={index}>
          <div>
            <strong>{hospital.name}</strong>
            <p>{hospital.distance}</p>
          </div>

          <span className="status available">
            {hospital.status}
          </span>
        </div>
      ))}
    </div>
  );
}

export default ServiceCard;