import React from 'react';
import './HotelLandingPage.css';
import { Link } from 'react-router-dom';

function HotelLandingPage() {
  return (
    <div className="landing-page-hotel">
      <div className="overlay"></div>
      <div className="content">
        <h1>Welcome to Hotel Management System</h1>
        <div className="buttons">
          <Link to = "/partner-portal/hotel/login" className="btn-hl">Login</Link>
          <Link to = "/partner-portal/hotel/signup" className="btn-hl">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}

export default HotelLandingPage;