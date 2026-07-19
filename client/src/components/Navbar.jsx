import { Link } from "react-router-dom";
import { Ambulance, Menu } from "lucide-react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link to="/" className="logo">
          <Ambulance size={28} />
          <span>LifeLink AI</span>
        </Link>

        <ul className="nav-links">
          <li>
            <a href="#features">Features</a>
          </li>

          <li>
            <a href="#workflow">How It Works</a>
          </li>

          <li>
            <a href="#stats">Statistics</a>
          </li>

          <li>
            <Link to="/hospital">Hospital</Link>
          </li>
        </ul>

        <div className="nav-buttons">
          <Link className="login-btn" to="/login">
            Login
          </Link>

          <Link className="sos-btn" to="/emergency">
            Emergency
          </Link>
        </div>

        <button className="mobile-menu">
          <Menu />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;