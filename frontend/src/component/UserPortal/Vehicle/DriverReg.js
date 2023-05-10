import axios from "axios";
import React, { useState } from "react";

const DriverReg = () => {
  const [formData, setFormData] = useState({
    driverId: "",
    driverNIC: "",
    driverAge: "",
    driverExp: "",
    driverName: "",
    driverAccidents: "",
  });

  const [formErrors, setFormErrors] = useState({
    driverId: "",
    driverNIC: "",
    driverAge: "",
    driverExp: "",
    driverName: "",
    driverAccidents: "",
  });

  const validate = () => {
    let valid = true;
    const errors = {};

    if (!formData.driverId) {
      errors.driverId = "Driver ID is required";
      valid = false;
    }

    if (!/^[A-Za-z0-9]+$/i.test(formData.driverId)) {
      errors.driverId = "Driver ID should be alphanumeric";
      valid = false;
    }

    if (!formData.driverNIC) {
      errors.driverNIC = "Driver NIC is required";
      valid = false;
    }

    if (!/^[0-9+]{9}[vV]?$/i.test(formData.driverNIC)) {
      errors.driverNIC = "Driver NIC should be in the format of 123456789V";
      valid = false;
    }

    if (!formData.driverAge) {
      errors.driverAge = "Driver Age is required";
      valid = false;
    }

    if (formData.driverAge < 18) {
      errors.driverAge = "Driver should be at least 18 years old";
      valid = false;
    }

    if (!formData.driverExp) {
      errors.driverExp = "Experience Years is required";
      valid = false;
    }

    if (formData.driverExp < 1) {
      errors.driverExp = "Experience Years should be at least 1";
      valid = false;
    }

    if (!formData.driverName) {
      errors.driverName = "Name is required";
      valid = false;
    }

    if (!/^[A-Za-z\s]+$/i.test(formData.driverName)) {
      errors.driverName = "Name should only contain alphabets and spaces";
      valid = false;
    }

    if (formData.driverAccidents < 0) {
      errors.driverAccidents = "Accidents should be a positive integer";
      valid = false;
    }

    setFormErrors(errors);
    return valid;
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
    console.log("hi");
    validate();
      console.log("hi");
      axios.post(`http://localhost:8000/driver/createaccount`,formData).then(()=>{
        alert("new driver account created succesfully");
        window.location.href="/partner-portal/hotel/landingpage";
        
      }).catch((error)=>{
        alert(error.responce.data);
      })
      
      console.log(formData);
    
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="driverId">Driver ID:</label>
        <input
          type="text"
          id="driverId"
          name="driverId"
          value={formData.driverId}
          onChange={handleChange}
        />
        {formErrors.driverId && (
          <span className="error">{formErrors.driverId}</span>
        )}
      </div>
      <div>
        <label htmlFor="driverNIC">Driver NIC:</label>
        <input
          type="text"
          id="driverNIC"
          name="driverNIC"
          value={formData.driverNIC}
          onChange={handleChange}
        />
        {formErrors.driverNIC && (
          <span className="error">{formErrors.driverNIC}</span>
        )}
      </div>
      <div>
    <label htmlFor="driverExp">Experience Years:</label>
    <input
      type="number"
      id="driverExp"
      name="driverExp"
      value={formData.driverExp}
      onChange={handleChange}
    />
    {formErrors.driverExp && (
      <span className="error">{formErrors.driverExp}</span>
    )}
  </div>
  <div>
    <label htmlFor="driverName">Name:</label>
    <input
      type="text"
      id="driverName"
      name="driverName"
      value={formData.driverName}
      onChange={handleChange}
    />
    {formErrors.driverName && (
      <span className="error">{formErrors.driverName}</span>
    )}
  </div>
  <div>
    <label htmlFor="driverAccidents">Accidents:</label>
    <input
      type="number"
      id="driverAccidents"
      name="driverAccidents"
      value={formData.driverAccidents}
      onChange={handleChange}
    />
    {formErrors.driverAccidents && (
      <span className="error">{formErrors.driverAccidents}</span>
    )}
  </div>
  <button type="submit">Submit</button>
</form>
);
};

export default DriverReg;