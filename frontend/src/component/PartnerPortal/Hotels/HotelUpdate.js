import React, { useEffect } from 'react'
import './NewHotelRegistration.css';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate , useParams } from "react-router-dom";

function HotelUpdate() {
    const { hotelRegNo } = useParams();
    const [hotelDetails, setHotelDetails] = useState({});
    const [errorMessage, setErrorMessage] = useState('');



    const getHotelList = () => {
      const formdata = new FormData();
      formdata.append('registrarNum',hotelRegNo);
      axios.get('http://localhost:8000/Hotel/profile/viewhotel')
      .then(response => {
        setHotelDetails(response.data.HotelDetails);
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
    }

    useEffect(() => {
      // get hotel details from API
      axios.get(`http://localhost:8000/Hotel/profile/viewhotel/${hotelRegNo}`)
        .then(response => {
          setHotelDetails(response.data.HotelDetails);
          console.log(response.data);
        })
        .catch(error => {
          setErrorMessage(error.message);
        });
    }, [hotelRegNo]);

    useEffect(() => {
      const trimmedValues = {};
      Object.keys(hotelDetails).forEach((key) => {
        trimmedValues[key] = typeof hotelDetails[key] === "string" ? hotelDetails[key].trim() : hotelDetails[key];
      });
      setFormValues(trimmedValues);
    }, [hotelDetails]);


 

    const [formValues, setFormValues] = useState({
      hotelName: "",
      registrarNum: "",
      category: "",
      starRate: "",
      address: "",
      contactNum: "",
      ownerName: "",
      hotelDescription: "",
      mainCity: ""
      
    });
    const [fileName , setFileName] = useState("");
    const [formErrors, setFormErrors] = useState({});
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValues({
        ...formValues,
        [name]: value,
      });
    };
  
    const onChangeFile = (e) => {
      setFileName(e.target.files[0]);
    }
  
  
  
  
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const formData = new FormData();

      const registrarNum = formValues.registrarNum;
  
  
   
  
      
      // const errors = validateForm(formValues);
      console.log(formValues.hotelName);
        axios.patch(`http://localhost:8000/Hotel/profile/viewhotel/${registrarNum}`,formValues).then(()=>{
          alert("hotel profile succesfully validated");
          // window.location.href="/partner-portal/hotel/landingpage";
          
        }).catch((error)=>{
          alert(error.responce.data);
        })
      
    };

    const deleteAccount = (e) => {
      const registrarNum = formValues.registrarNum;
      axios.delete(`http://localhost:8000/Hotel/profile/viewhotel/${registrarNum}`).then (()=>{
        alert("hotel deleted succesfully");
        window.location.href="/partner-portal/hotel/landingpage";
      }).catch((error)=>{
        alert(error.responce.data);
      })
    }
  
    // const validateForm = (values) => {
    //   let errors = {};
    //   if (!values.hotelName.trim()) {
    //     errors.hotelName = "Hotel name is required";
    //   }
    //   if (!values.registrarNum.trim()) {
    //     errors.registrarNum = "Registrar number is required";
    //   }
    //   if (!values.category.trim()) {
    //     errors.category = "Category is required";
    //   }
    //   if (!values.starRate.trim()) {
    //     errors.starRate = "Star rate is required";
    //   } else if (isNaN(values.starRate) || values.starRate < 1 || values.starRate > 5) {
    //     errors.starRate = "Star rate must be a number between 1 and 5";
    //   }
    //   if (!values.address.trim()) {
    //     errors.address = "Address is required";
    //   }
    //   if (!values.hotelDescription.trim()) {
    //     errors.hotelDescription = "hotelDescription is required";
    //   }
    //   if (!values.contactNum.trim()) {
    //     errors.contactNum = "Contact number is required";
    //   }else{
    //     let a = values.contactNum.toString();
    //     if(a.length > 10){
    //       errors.contactNum = "Contact number can't be exceed 10 numbers";
    //     }
    //   }
      
  
    //   if (!values.ownerName.trim()) {
    //     errors.ownerName = "Owner name is required";
    //   }
    //   if (!values.mainCity.trim()) {
    //     errors.mainCity = "Main city is required";
    //   }
    //   return errors;
    // };


  return (
    
    <div className="container">
    <h1>Profile - {formValues.hotelName}</h1>
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <div className="form-group">
        <label htmlFor="hotelName">Hotel Name</label>
        <input
          type="text"
          name="hotelName"
          id="hotelName"
          value={formValues.hotelName}
          onChange={handleChange}
        />
        {formErrors.hotelName && (
          <span className="error">{formErrors.hotelName}</span>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="registrarNum">Registrar Number</label>
        <input
          type="text"
          name="registrarNum"
          id="registrarNum"
          value={formValues.registrarNum}
          onChange={handleChange}
          disabled
        />
        {formErrors.registrarNum && (
          <span className="error">{formErrors.registrarNum}</span>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="category">Category</label>
        <select
          name="category"
          id="category"
          value={formValues.category}
          onChange={handleChange}
        >
          <option value="">Select Category</option>
          <option value="1 Star">1 Star</option>
          <option value="2 Stars">2 Stars</option>
          <option value="3 Stars">3 Stars</option>
          <option value="4 Stars">4 Stars</option>
          <option value="5 Stars">5 Stars</option>  </select>
    {formErrors.category && (
      <span className="error">{formErrors.category}</span>
    )}
  </div>
  <div className="form-group">
    <label htmlFor="starRate">Star Rate</label>
    <input
      type="number"
      name="starRate"
      id="starRate"
      min="1"
      max="5"
      value={formValues.starRate}
      onChange={handleChange}
    />
    {formErrors.starRate && (
      <span className="error">{formErrors.starRate}</span>
    )}
  </div>
  <div className="form-group">
    <label htmlFor="hotelDescription">hotelDescription</label>
    <textarea
      name="hotelDescription"
      id="hotelDescription"
      rows="3"
      value={formValues.hotelDescription}
      onChange={handleChange}
    ></textarea>
    {formErrors.hotelDescription && (
      <span className="error">{formErrors.hotelDescription}</span>
    )}
    </div>
  <div className="form-group">
    <label htmlFor="address">Address</label>
    <textarea
      name="address"
      id="address"
      rows="3"
      value={formValues.address}
      onChange={handleChange}
    ></textarea>
    {formErrors.address && (
      <span className="error">{formErrors.address}</span>
    )}
  </div>
  <div className="form-group">
    <label htmlFor="contactNum">Contact Number</label>
    <input
      type="text"
      name="contactNum"
      id="contactNum"
      value={formValues.contactNum}
      onChange={handleChange}
    />
    {formErrors.contactNum && (
      <span className="error">{formErrors.contactNum}</span>
    )}
  </div>
  <div className="form-group">
    <label htmlFor="ownerName">Owner Name</label>
    <input
      type="text"
      name="ownerName"
      id="ownerName"
      value={formValues.ownerName}
      onChange={handleChange}
    />
    {formErrors.ownerName && (
      <span className="error">{formErrors.ownerName}</span>
    )}
  </div>
  <div className="form-group">
    <label htmlFor="mainCity">Main City</label>
    <input
      type="text"
      name="mainCity"
      id="mainCity"
      value={formValues.mainCity}
      onChange={handleChange}
    />
    {formErrors.mainCity && (
      <span className="error">{formErrors.mainCity}</span>
    )}
  </div>

  <button type="submit">Submit</button>
  <button className='dbtn' onClick={deleteAccount}>Delete Account</button>
</form>

    </div>
  )
}

export default HotelUpdate
