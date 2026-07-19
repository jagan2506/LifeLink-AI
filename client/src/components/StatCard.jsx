import "../styles/cards.css";

function StatCard({ title, value, color }) {
  return (
    <div
      className="stat-card-dashboard"
      style={{
        borderTop: `5px solid ${color}`,
      }}
    >
      <h4>{title}</h4>

      <h2>{value}</h2>
    </div>
  );
}

export default StatCard;