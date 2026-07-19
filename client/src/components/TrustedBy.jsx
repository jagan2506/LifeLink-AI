import "../styles/trusted.css";

const partners = [
  "Apollo Hospitals",
  "Government Hospital",
  "Red Cross",
  "Ambulance Network",
  "Police Control Room",
  "Fire & Rescue",
];

function TrustedBy() {
  return (
    <section className="trusted">
      <div className="container">
        <p className="trusted-title">
          Trusted Emergency Network
        </p>

        <div className="trusted-grid">
          {partners.map((item, index) => (
            <div className="trusted-card" key={index}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustedBy;