import React, { useState } from "react";
import "./HotelLogin.css"; // Import the CSS file
import axios from "axios";

function HotelLogin() {
  const [hotelRegNo, setHotelRegNo] = useState("");
  const [password, setPassword] = useState("");
  const [hotelRegNoError, setHotelRegNoError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleHotelRegNoChange = (event) => {
    setHotelRegNo(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate the form
    let isValid = true;

    if (hotelRegNo.trim() === "") {
      setHotelRegNoError("Hotel Registration No. is required.");
      isValid = false;
    } else {
      setHotelRegNoError("");
    }

    if (password.trim() === "") {
      setPasswordError("Password is required.");
      isValid = false;
    } else {
      setPasswordError("");
    }

    const hotelLogin = {
      hotelRegNo,
      password
    }

    if (isValid) {
      axios.post(`http://localhost:8000/Hotel/profile/login`, hotelLogin)
        .then((response) => {
          const hotelRegNum = response.data.hotelLogin.hotelRegNo; // extract the hotelRegNo from the response
          window.location.href = `/partner-portal/hotel/dashboard/${hotelRegNum}`; // navigate to the hotel dashboard page
        })
        .catch((error) => {
          alert(error.response.data.msg);
        });
    } 
  }

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <img src="/hotel-login.png" className="img-hol" alt="hotelimg"></img>
      <h1 className="login-form__title">Hotel Login</h1>
      <div className="login-form__group">
        <label htmlFor="hotelRegNo" className="login-form__label">
          Hotel Registration No.
        </label>
        <input
          type="text"
          id="hotelRegNo"
          className="login-form__input"
          value={hotelRegNo}
          placeholder="Hotel Registration Number"
          onChange={handleHotelRegNoChange}
        />
        {hotelRegNoError && (
          <span className="login-form__error">{hotelRegNoError}</span>
        )}
      </div>
      <div className="login-form__group">
        <label htmlFor="password" className="login-form__label">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="login-form__input"
          value={password}
          placeholder="Password"
          onChange={handlePasswordChange}
        />
        {passwordError && (
          <span className="login-form__error">{passwordError}</span>
        )}
      </div>
      <button type="submit" className="login-form__button">
        Login
      </button>
    </form>
  );
}

export default HotelLogin;