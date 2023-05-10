import React from 'react'
import { Link } from 'react-router-dom'
import './AgentPortal.css'

function AgentPortal() {
  
  return (
    <div>
      <h2>Welcome to Agent Portal</h2>
        <div className="dashboard-container">
      <Link to="/partner-portal/hotel/landingpage" className="icon-container">
        <img src='https://png.pngtree.com/png-vector/20190521/ourmid/pngtree-hotel-icon-for-personal-and-commercial-use-png-image_1044892.jpg' alt="Hotel" className="icon" />
        <p>Hotel</p>
      </Link>
      <Link to="/partner-portal/agentportal/drivernavigate" className="icon-container">
        <img src='https://png.pngtree.com/png-vector/20191018/ourmid/pngtree-driver-of-train-icon-cartoon-style-png-image_1823731.jpg' alt="Driver" className="icon" />
        <p>Driver</p>
      </Link>
      <Link to="/tour" className="icon-container">
        <img src='https://www.pngkit.com/png/full/261-2618828_travel-package-tour-monument-landmark-backpack-holiday-travel.png' alt="Tour" className="icon" />
        <p>Tour</p>
      </Link>
    </div>
    </div>
  )
}

export default AgentPortal
