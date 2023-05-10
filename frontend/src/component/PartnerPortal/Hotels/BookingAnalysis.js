import React, { useEffect , useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './BookingAnalysis.css';
import jsPDF from 'jspdf';
import 'jspdf-autotable';


function BookingAnalysis() {

  const {hotelRegNo} = useParams();
  const [reservations, setReservations] = useState(null); // initialize as null

  useEffect(() => {
    axios.get(`http://localhost:8000/hotels/viewreservation/${hotelRegNo}`)
      .then((response) => {
        setReservations(response.data.viewReservations);
        console.log(response.data.viewReservations);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [hotelRegNo]);

  if (reservations === null) {
    return <div>Loading...</div>; // show a loading message while waiting for the data
  }

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.autoTable({html: '#reservation-table'});
    doc.save(`${hotelRegNo}-reservations.pdf`);
  }

  return (
    <div>
      <h1>Hotel Reservations</h1>
      <table id='reservation-table'>
        <thead>
          <tr>
            <th>Reservation ID</th>
            <th>Guest Name</th>
            <th>Room Type</th>
            <th>No. of Nights</th>
            <th>Total Price($)</th>
            <th>Check-In Date</th>
            <th>Check-Out Date</th>
          </tr>
        </thead>
        <tbody>
          {reservations.length > 0 && reservations.map(reservation => ( // add a conditional statement to check if reservations is not an empty array
            <tr key={reservation._id}>
              <td>{reservation.reservationId}</td>
              <td>{reservation.guestName}</td>
              <td>{reservation.roomType}</td>
              <td>{reservation.numberOfNights}</td>
              <td>{reservation.totalPrice}</td>
              <td>{new Date(reservation.checkInDate).toLocaleDateString()}</td>
              <td>{new Date(reservation.checkOutDate).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button class='btn btn-primary' onClick={generatePDF}>Download PDF</button>
    </div>
  );

  
}

export default BookingAnalysis
