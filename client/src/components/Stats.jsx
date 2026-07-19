import "../styles/stats.css";

function Stats() {
  return (
    <section className="stats-section" id="stats">
      <div className="container stats-grid">
        <div className="stat-card">
          <h2>120+</h2>
          <p>Hospitals Connected</p>
        </div>

        <div className="stat-card">
          <h2>2500+</h2>
          <p>Emergency Requests</p>
        </div>

        <div className="stat-card">
          <h2>5s</h2>
          <p>Average Alert Time</p>
        </div>

        <div className="stat-card">
          <h2>24/7</h2>
          <p>Availability</p>
        </div>
      </div>
    </section>
  );
}

export default Stats;