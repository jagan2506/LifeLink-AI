import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">

        <h2>LifeLink AI</h2>

        <p>
          AI Powered Emergency Response Platform
        </p>

        <div className="footer-links">
          <a href="#features">Features</a>
          <a href="#workflow">How It Works</a>
          <a href="#stats">Statistics</a>
        </div>

        <small>
          © 2026 LifeLink AI. All Rights Reserved.
        </small>

      </div>
    </footer>
  );
}

export default Footer;