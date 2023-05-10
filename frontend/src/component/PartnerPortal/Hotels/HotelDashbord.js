import React from 'react'
import { Link , useParams } from 'react-router-dom';
import './HotelDashbord.css'


function HotelDashbord() {
    const { hotelRegNo } = useParams();
  return (
    <div>
      <h1>Welcome to Hotel's portal</h1>
      <h2>Hotel Register No - {hotelRegNo}</h2>

    <div className="dashboard">

    <Link className='hd-link' to={`/partner-portal/hotel/dashboard/updateprofile/${hotelRegNo}`}>
      <div className="dashboard-icon">
        <p>Manage Hotel Profile</p>
      </div>
      </Link>
      
      <Link className='hd-link' to={`/partner-portal/hotel/dashboard/addhotelrooms/${hotelRegNo}`}>
      <div className="dashboard-icon">
        <p>Add Rooms</p>
      </div>
      </Link>

      <Link className='hd-link' to={`/partner-portal/hotel/dashboard/bookinganalysis/${hotelRegNo}`}>
      <div className="dashboard-icon" style={{backgroundImage: `url('https://www.transparentpng.com/thumb/analysis/AWHMkA-analysis-icon-clipart-background.png')`}}>
        <p>Booking Analysis</p>
      </div>
      </Link>
    </div>

    </div>
  )
}

export default HotelDashbord
