import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom';

const Home = () =>{
    return (
        <div className="mainLandingpage">
          <Link to ="/user-portal/hotels" style={{ textDecoration: 'none', color: '#1f2937'}}>
          <section className="booking">
            <h2>Hotel Booking</h2>
            <img src="./img/hotelHomePage.jpg" alt="Hotel Room" />
            <p>Book your hotel room for the perfect holiday experience.</p>
          </section>
          </Link>
          <section className="booking">
            <h2>Guide Booking</h2>
            <img src="./img/hotelHomePage.jpg" alt="Guide" />
            <p>Hire a professional guide for your holiday adventure.</p>
          </section>
          <section className="booking">
            <h2>Vehicle Booking</h2>
            <img src="./img/hotelHomePage.jpg" alt="Vehicle" />
            <p>Rent a vehicle to explore your holiday destination.</p>
          </section>
        </div>
      );
    };

export default Home;
