import './App.css';
import { Link } from 'react-router-dom';

const App = () => {
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
              <h1>Home</h1>
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

      <section className="home">
        <div className="home-info">
          <h1>KIEL ONGTENGCO</h1>
          <h3>4th Year Computer Engineering</h3>
          <p>
            Hi! I'm Kiel, the creator of this webpage,
            <br />
            and I would like to introduce myself to you.
            <br />
            I am an aspiring Programmer of any field,
            <br />
            and one of my goals is to achieve my dream
            <br />
            to be an amateur/professional
            <br />
            basketball player.
            <br />
          </p>
        </div>
      </section>
    </div>
  );
};

export default App;
