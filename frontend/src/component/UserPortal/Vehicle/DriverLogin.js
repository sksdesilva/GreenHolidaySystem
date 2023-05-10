import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function DriverLogin() {
  const [driverId, setDriverId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleDriverIdChange = (event) => {
    setDriverId(event.target.value);
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   if (!driverId) {
  //     setErrorMessage('Please enter a valid driver ID.');
  //     return;
  //   }
  //   console.log('Driver ID: ', driverId);
  //   setErrorMessage('');
  // };

  return (
    <div>
      <h1>Driver Login</h1>
      {errorMessage && <p className="error">{errorMessage}</p>}
      <form>
        <div className="form-group">
          <label htmlFor="driverId">Driver ID</label>
          <input
            type="text"
            className="form-control"
            id="driverId"
            placeholder="Enter driver ID"
            value={driverId}
            onChange={handleDriverIdChange}
          />
        </div>
        <Link to={`/partner-portal/vehilcle/dashboard/${driverId}`}>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        </Link>
      </form>
    </div>
  );
}

export default DriverLogin;
