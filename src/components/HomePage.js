import React from "react";
import "../styles/HomePage.css";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      {/* Navbar */}
      <nav>
        <div className="nav-container">
          <div className="logo-container">
            <img src="/images/cesa-logo.png" alt="CESA Logo" />
            <h1 className="cesa-full-form">Computer Engineering Students' Association (CESA)</h1>
          </div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/team">Team</Link></li>
            <li><Link to="/events">Events</Link></li>
          </ul>
        </div>
      </nav>


      {/* About Us Section */}
      <section className="about-us">
        <h2>About Us</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>"Code, Compete, Conquer with CESA!"</h3>
            <p>
              Welcome to CESA (Computer Engineering Students' Association), your gateway 
              to a vibrant community of computer engineering enthusiasts at our college...
            </p>
          </div>
          <div className="about-images">
            <img src="/images/event1.jpeg" alt="CESA Event 1" />
            <img src="/images/event2.jpeg" alt="CESA Event 2" />
            <img src="/images/event3.jpeg" alt="CESA Event 3" />
            <img src="/images/event4.jpeg" alt="CESA Event 4" />
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="past-events">
        <h2>Past Events</h2>
        <h3>"Event Rewind: Ctrl + Z Time!"</h3>
        <div className="events-gallery">
          <div className="event">
            <img src="/images/bit-battle.jpeg" alt="Bit Battle" />
            <p>Bit Battle</p>
          </div>
          <div className="event">
            <img src="/images/admission-event.jpeg" alt="From Aspiration to Admission" />
            <p>From Aspiration to Admission</p>
          </div>
          <div className="event">
            <img src="/images/ai-workshop.jpeg" alt="AI Workshop" />
            <p>Hands-on Workshop on Generative AI</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer>
        <div className="footer-container">
          <h2>CONTACT US</h2>
          <div className="footer-content">
            {/* Map & Address (Side by Side) */}
            <div className="contact-info">
              {/* Address Section */}
              <div className="address-container">
                <h3>Address</h3>
                <p>Vidyalankar Institute of Technology, Wadala (East), Mumbai - 400037</p>
              </div>

              {/* Google Map Embed */}
              <div className="map-container">
                <iframe
                  title="CESA Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.8417289707555!2d72.87060407490448!3d19.07341835212365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cedf0dd0e47f%3A0x453b4f13493513a0!2sVidyalankar%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1711706471738!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0, borderRadius: "8px" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Contact Details (Below) */}
            <div className="contact-container">
              <h3>Contacts</h3>
              <p>
                Email: <a href="mailto:cesa.vidyalankar@gmail.com">cesa.vidyalankar@gmail.com</a>
              </p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="social-icons">
            <a href="https://www.linkedin.com/company/cesa-vit/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} />
            </a>
            <a href="https://www.instagram.com/cesa.vit/" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={30} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
