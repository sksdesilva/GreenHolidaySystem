import React, { useEffect , useState } from 'react';
import { useNavigate , useParams } from "react-router-dom";
import axios from "axios";
import './AddHotelRoom.css';

function AddHotelRoom() {
    const { hotelRegNo } = useParams();
    const [roomType, setRoomType] = useState('');
    const [numberOfAvailableRooms, setNumberOfAvailableRooms] = useState(0);
    const [availableStartDate, setAvailableStartDate] = useState('');
    const [availableEndDate, setAvailableEndDate] = useState('');
    const [hotelRegistrationNumber, setHotelRegistrationNumber] = useState('');
    const [formError, setFormError] = useState('');
  
    const handleSubmit = async (event) => {
    event.preventDefault();

    
    
  
      // Check if all fields are filled
      if (!roomType || numberOfAvailableRooms === 0 || !availableStartDate || !availableEndDate) {
        setFormError('Please fill in all fields.');
        return;
      }
  
      const newHotelRoom = { roomType, numberOfAvailableRooms, availableStartDate, availableEndDate, hotelRegistrationNumber };
  
      try {
        const response = await axios.post(`http://localhost:8000/Hotel/profile/viewhotel/${hotelRegNo}`, newHotelRoom);
        setFormError('');
        console.log(response.data);
        window.location.href="/partner-portal/hotel/landingpage";
        
      } catch (error) {
        console.error(error);
        setFormError('An error occurred while creating the hotel room. Please try again later.');
      }
    };
  
    return (
      <form onSubmit={handleSubmit} className='form-h'>
        {formError && <p style={{ color: 'red' }}>{formError}</p>}
        <div>
          <label htmlFor="roomType">Room Type:</label>
          <select id="roomType" value={roomType} onChange={(event) => setRoomType(event.target.value)}>
            <option value="">Select a room type</option>
            <option value="Single Room">Single Room</option>
            <option value="Double Room">Double Room</option>
            <option value="Triple Room">Triple Room</option>
          </select>
        </div>
        <div>
          <label htmlFor="numberOfAvailableRooms">Number of Available Rooms:</label>
          <input type="number" id="numberOfAvailableRooms" value={numberOfAvailableRooms} onChange={(event) => setNumberOfAvailableRooms(parseInt(event.target.value))} />
        </div>
        <div>
          <label htmlFor="availableStartDate">Available Start Date:</label>
          <input type="date" id="availableStartDate" value={availableStartDate} onChange={(event) => setAvailableStartDate(event.target.value)} />
        </div>
        <div>
          <label htmlFor="availableEndDate">Available End Date:</label>
          <input type="date" id="availableEndDate" value={availableEndDate} onChange={(event) => setAvailableEndDate(event.target.value)} />
        </div>
        <div>
          <label htmlFor="hotelRegistrationNumber">Hotel Registration Number:</label>
          <input type="text" id="hotelRegistrationNumber" placeholder={hotelRegNo}  value={hotelRegistrationNumber} onChange={(event) => setHotelRegistrationNumber(event.target.value)} />
        </div>
        <button type="submit">Create Hotel Room</button>
      </form>
    );
}

export default AddHotelRoom
