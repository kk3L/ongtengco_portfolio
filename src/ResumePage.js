import './ResumePage.css';
import { Link } from 'react-router-dom';

const ResumePage = () => {
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
              <h1>Resume</h1>
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

      <section className="resume">
        <div className="resume-info">
          <h1>Education</h1>
          <h2>College</h2>
          <h3 className="tip">Technological Institute of <br />the Philippines</h3>
          <p>
            Computer Engineering (CPE)
            <br />
            2021-Present
            <br />
            Quiapo, Manila
          </p>
          <h2>High School/Grade School</h2>
          <h3 className="pcs">Paco Catholic School</h3>
          <p>
            Science, Technology, Engineering and Math (STEM)
            <br />
            2016-2021
            <br />
            Paco, Manila
          </p>
          <p>
            Grade 1 - Grade 6
            <br />
            2010-2016
            <br />
            Paco, Manila
          </p>
          <h1>Experience</h1>
          <p>Created a Parking Space Database</p>
          <h1>Skills</h1>
          <p>Web Development</p>
          <p>Python Programming</p>
          <p>C++ Programming</p>
          <h1>Achievements</h1>
          <p>CISCO Certified Entry Networking Technician</p>
        </div>
      </section>
    </div>
  );
};

export default ResumePage;
