import './ContactPage.css';
import { Link } from 'react-router-dom';

const ContactPage = () => {
  return (
    <div>
      <nav>
        <div className="navbar">
          <div className="container nav-container">
            <input className="checkbox" type="checkbox" id="checkbox" />
            <div className="hamburger-lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </div>
            <div className="logo">
              <h1>Contact</h1>
            </div>
            <div className="menu-items">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/resume">Resume</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <section className="contact">
        <div className="contact-info">
          <h1>Contact Me!</h1>
          <h3>
            <i className="ri-phone-fill"></i>&nbsp;&nbsp;&nbsp;09270823209
          </h3>
          <h3>
            <i className="ri-mail-send-fill"></i>&nbsp;&nbsp;&nbsp;kielongtengco@gmail.com
          </h3>
          <nav className="socials">
            <a href="https://www.instagram.com/kyeel.o/" target="_blank" rel="noopener noreferrer">
              <i className="ri-instagram-line"></i>
            </a>
            <a href="https://twitter.com/k_ongtengco" target="_blank" rel="noopener noreferrer">
              <i className="ri-twitter-x-line"></i>
            </a>
            <a href="https://www.facebook.com/ongtengco.kiell" target="_blank" rel="noopener noreferrer">
              <i className="ri-facebook-circle-fill"></i>
            </a>
            <a href="https://github.com/kk3L" target="_blank" rel="noopener noreferrer">
              <i className="ri-github-fill"></i>
            </a>
          </nav>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
