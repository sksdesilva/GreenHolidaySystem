import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function DriverDashboard() {
  const { driverId } = useParams();
  const [driverData, setDriverData] = useState([]);

  useEffect(() => {
    getDetails();
  }, []);

  function getDetails() {
    axios
      .get(`http://localhost:8000/driver/getaccount/${driverId}`)
      .then((response) => {
        setDriverData(response.data.Driver);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <h1>Welcome to Driver Portal</h1>
      <table>
        <thead>
          <tr>
            <th>Driver ID</th>
            <th>Driver NIC</th>
            <th>Driver Exp</th>
            <th>Driver Name</th>
            <th>Driver Accidents</th>
          </tr>
        </thead>
        <tbody>
  {driverData.length > 0 && driverData.map((driver, index) => (
    <tr key={index}>
      <td>{driver.driverId}</td>
      <td>{driver.driverNIC}</td>
      <td>{driver.driverExp}</td>
      <td>{driver.driverName}</td>
      <td>{driver.driverAccidents}</td>
    </tr>
  ))}
</tbody>

      </table>
    </div>
  );
}

export default DriverDashboard;
