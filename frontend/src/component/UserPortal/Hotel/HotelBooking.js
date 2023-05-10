import React, { useEffect, useState } from 'react'
import './HotelBooking.css'
import axios from 'axios';
import { useParams , Link } from 'react-router-dom'


function HotelBooking() {
    const { hotelRegNo } = useParams();
    const [registrarNum, setRegistrarNum] = useState('');
    const [reservationId, setReservationId] = useState('');
    const [guestName, setGuestName] = useState('');
    const [roomType, setRoomType] = useState('');
    const [numberOfNights, setNumberOfNights] = useState('');
    const [totalPrice, setTotalPrice] = useState('50');
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');
    
  
    const handleSubmit = (event) => {
      event.preventDefault();

     


  
      const reservationData = {
        registrarNum,
        reservationId,
        guestName,
        roomType,
        numberOfNights,
        totalPrice,
        checkInDate,
        checkOutDate
      };
  
      axios.post('http://localhost:8000/hotels/makereservation', reservationData)
        .then((response) => {
          console.log(response);
          alert("Reservation was succesfully");
          window.location.href="/user-portal/hotels";

        })
        .catch((error) => {
          console.log(error);
        });
    };
  
    return (
      <div className="hotel-reservation-form">
        <h2>Make a reservation</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="registrarNum">Hotel Registrar Number:</label>
            <input
              type="text"
              id="registrarNum"
              name="registrarNum"
              placeholder={hotelRegNo}
              onChange={(event) => setRegistrarNum(event.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="reservationId">NIC:</label>
            <input
              type="text"
              id="reservationId"
              name="reservationId"
              value={reservationId}
              onChange={(event) => setReservationId(event.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="guestName">Guest Name:</label>
            <input
              type="text"
              id="guestName"
              name="guestName"
              value={guestName}
              onChange={(event) => setGuestName(event.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="roomType">Room Type:</label>
            <input
              type="text"
              id="roomType"
              name="roomType"
              value={roomType}
              onChange={(event) => setRoomType(event.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="numberOfNights">Number of Nights:</label>
            <input
              type="number"
              id="numberOfNights"
              name="numberOfNights"
              value={numberOfNights}
              onChange={(event) => setNumberOfNights(event.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="totalPrice">Total Price:</label>
            <input
              type="number"
              id="totalPrice"
              name="totalPrice"
              value={totalPrice}
              onChange={(event) => setTotalPrice(event.target.value)}
              required
            />
          </div>
          <div className="form-group">
      <label htmlFor="checkInDate">Check-In Date:</label>
      <input
        type="date"
        id="checkInDate"
        name="checkInDate"
        value={checkInDate}
        onChange={(event) => setCheckInDate(event.target.value)}
        required
      />
    </div>
    <div className="form-group">
      <label htmlFor="checkOutDate">Check-Out Date:</label>
      <input
        type="date"
        id="checkOutDate"
        name="checkOutDate"
        value={checkOutDate}
        onChange={(event) => setCheckOutDate(event.target.value)}
        required
      />
    </div>
    <button type="submit">Submit</button>
  </form>
</div>
);
}

export default HotelBooking
