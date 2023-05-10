import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './ViewHotel.css'
import { useParams , Link } from 'react-router-dom'

const ViewHotels = () => {

const [hotel,setHotel] = useState([]);
const [currentPage,setCurrentPage] = useState(1);
const [itemsPerPage, setItemsPerPage] = useState(2);
const [starRate, setStarRate] = useState(0);


const getHotelList = () => {
  let url = 'http://localhost:8000/Hotels';
 
  if (starRate > 0) { // check if a star rate filter is selected
    url = `${url}?starRate=${starRate}`;
  
  axios.get(url).then((res) =>{
      console.log(res);
      setHotel(res.data.hotelList)
  }).catch((error)=>{
      alert(error.responce.data);
  })
}

if (starRate === 0) { // check if a star rate filter is selected


axios.get(url).then((res) =>{
    console.log(res);
    setHotel(res.data.hotelList)
}).catch((error)=>{
    alert(error.responce.data);
})
}


}

useEffect(()=>{
  getHotelList();
},[starRate]); // update the hotel list when star rate is changed

const lastIndex = currentPage * itemsPerPage;
const firstIndex = lastIndex - itemsPerPage;

const currentItems = hotel.filter(item => starRate === 0 || item.starRate === starRate) // filter the hotels based on the selected star rate
                          .slice(firstIndex, lastIndex);
                          const filteredHotels = hotel.filter(item => starRate === 0 || item.starRate === starRate);
                          const totalFilteredItems = filteredHotels.length;
                          const totalPages = Math.ceil(totalFilteredItems / itemsPerPage);
                          



const pageNumbers = [];
for (let i = 1; i <= totalPages; i++) {
  pageNumbers.push(i);
}


  return (
    <div>
      <h1>Hotels</h1>

      <div className='main-container'>
      <div className="filter-container">
          <label htmlFor="starRate">Filter by star rate:</label>
          <select id="starRate" name="starRate" onChange={(e) => setStarRate(parseInt(e.target.value))}>
            <option value="0">All</option>
            <option value="1">1 star</option>
            <option value="2">2 stars</option>
            <option value="3">3 stars</option>
            <option value="4">4 stars</option>
            <option value="5">5 stars</option>
          </select>
        </div>


      {/* {hotel.map((val,index)=>{ */}
          {currentItems.map((val, index) => {
        return(
          <div className="container-h" key={index}>
            <div className="hotel-container">
            <div className='row'>
              <div className='col-2'>
              <img class="img-container-h" src={`/hoteluploads/${val.hotelImg}`} />
              </div>
              <div className='col-8'>
                <div className='hotel-des'>
               <h3>{val.hotelName}</h3>
               <p>{val.mainCity}</p>
               <p>{val.hotelDescription}</p>
               <h4>{
                    Array.from({ length: val.starRate }, (_, i) => {
                    return <span key={i}>⭐</span>;
                    })
                   }
               </h4>
                </div>
              </div>
              <div className='col-2'>
                <div className='button-hv'>
                <Link to={`/user-portal/hotels/booking/${val.registrarNum}`}>
                <button type="button" className="btn btn-primary">Book Now</button>
                </Link>
                </div>
                </div>

          
           </div>
            </div>
            </div>
        )
      })}

<div className="pagination">
          {pageNumbers.map(number => (
            <button key={number} className={currentPage === number ? 'active' : ''}
              onClick={() => setCurrentPage(number)}>
              {number}
            </button>
          ))}
        </div>
      
    </div>
    </div>
  )
}

export default ViewHotels;
