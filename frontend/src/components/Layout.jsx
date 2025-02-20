import { useState } from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../styles/HomePage.css";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="homepage">
      <div className="homepage-container">
        {/* Navbar */}
        <nav className="nav">
          <div className="nav-container">
            <div className="brand-name">
              <span>Fixit</span>
              <span className="brand-accent">Hub</span>
            </div>

            <button
              className="menu-button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
            </button>

            <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/householdrepairs" className="nav-link">
                Household Repairs
              </Link>
              <Link to="/public-issues" className="nav-link">
                Public Issues
              </Link>
              <Link to="/about" className="nav-link">
                About
              </Link>
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-container">
            <div className="footer-grid">
              <div>
                <h4 className="footer-title">Connect With Us</h4>
                <div className="social-links">
                  <a href="#" className="social-link">
                    <i className="fab fa-facebook social-icon"></i>
                  </a>
                  <a href="#" className="social-link">
                    <i className="fab fa-twitter social-icon"></i>
                  </a>
                  <a href="#" className="social-link">
                    <i className="fab fa-instagram social-icon"></i>
                  </a>
                </div>
              </div>
              <div>
                <h4 className="footer-title">Contact</h4>
                <p className="footer-text">Email: info@fixithub.com</p>
                <p className="footer-text">Phone: (555) 123-4567</p>
              </div>
              <div>
                <h4 className="footer-title">Legal</h4>
                <p className="footer-text">© 2025 FixItHub</p>
                <a href="#" className="footer-link">
                  Privacy Policy
                </a>
                <a href="#" className="footer-link">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
