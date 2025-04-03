import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
    return (
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
    );
};

export default Header;
