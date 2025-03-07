import "../styles/HomePage.css";
import Logo from "../images/Logo.jpg";
import "@fortawesome/fontawesome-free/css/all.min.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="homepage-container">
        {/* Hero Section */}
        <main>
          <section className="hero">
            <div className="hero-bg"></div>
            <div className="hero-content">
              <div className="hero-card">
                <img
                  src={Logo}
                  alt="FixItHub Logo showing a wrench and gear icon"
                  className="hero-logo"
                />
                <h1 className="hero-title">
                  Your One-Stop Solution for Repairs
                </h1>
                <p className="hero-text">
                  Whether it&apos;s a household fix or a community issue,
                  FixItHub connects you with solutions that matter.
                </p>
                <button className="button">Get Started</button>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="features">
            <div className="features-container">
              <div className="features-grid">
                <div className="feature-card">
                  <i className="fas fa-home feature-icon"></i>
                  <h3 className="feature-title">Household Repairs</h3>
                  <p className="feature-text">
                    Find solutions for all your home maintenance needs.
                  </p>
                </div>
                <div className="feature-card">
                  <i className="fas fa-city feature-icon"></i>
                  <h3 className="feature-title">Public Issues</h3>
                  <p className="feature-text">
                    Report and track community infrastructure problems.
                  </p>
                </div>
                <div className="feature-card">
                  <i className="fas fa-users feature-icon"></i>
                  <h3 className="feature-title">Community Driven</h3>
                  <p className="feature-text">
                    Connect with experts and community members.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        {/* <footer className="footer">
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
        </footer> */}
      </div>
    </div>
  );
};

export default HomePage;
