import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import Header from './component/Header';
import AboutUs from './component/AboutUs';
import ContactUs from './component/ContactUs';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HotelLandingPage from './component/PartnerPortal/Hotels/HotelLandingPage';
import HotelLogin from './component/PartnerPortal/Hotels/HotelLogin';
import NewHotelRegistration from './component/PartnerPortal/Hotels/NewHotelRegistration';
import ViewHotels from './component/UserPortal/Hotel/ViewHotels';
import HotelDashbord from './component/PartnerPortal/Hotels/HotelDashbord';
import HotelUpdate from './component/PartnerPortal/Hotels/HotelUpdate';
import BookingAnalysis from './component/PartnerPortal/Hotels/BookingAnalysis';
import AgentPortal from './component/PartnerPortal/AgentPortal';
import DriverReg from './component/UserPortal/Vehicle/DriverReg';
import DriverLogin from './component/UserPortal/Vehicle/DriverLogin';
import DriverNavigate from './component/UserPortal/Vehicle/DriverNavigate';
import AddHotelRoom from './component/PartnerPortal/Hotels/AddHotelRoom';
import HotelBookingForm from './component/PartnerPortal/Hotels/HotelBookingForm';
import HotelBooking from './component/UserPortal/Hotel/HotelBooking';
import DriverDashbord from './component/UserPortal/Vehicle/DriverDashbord';



function App() {
  return (
    <div className="App">
    
  

<BrowserRouter>
<Header/> 
<Routes>


<Route path="/" element={<Home/>}/>
<Route path="/aboutUs" element={<AboutUs/>}/>
<Route path="/contactUs" element={<ContactUs/>}/>
<Route path="/partner-portal/hotel/landingpage" element={<HotelLandingPage/>}/>
<Route path="/partner-portal/hotel/login" element={<HotelLogin/>}/>
<Route path="/partner-portal/hotel/signUp" element={<NewHotelRegistration/>}/>
<Route path="/partner-portal/hotel/dashboard/:hotelRegNo" element={<HotelDashbord/>}/>
<Route path="/partner-portal/hotel/dashboard/updateprofile/:hotelRegNo" element={<HotelUpdate/>}/>
<Route path="/partner-portal/hotel/dashboard/bookinganalysis/:hotelRegNo" element={<BookingAnalysis/>}/>
<Route path="/partner-portal/hotel/dashboard/addhotelrooms/:hotelRegNo" element={<AddHotelRoom/>}/>
<Route path="/partner-portal/vehilcle/dashboard/:driverId" element={<DriverDashbord/>}/>

<Route path="/partner-portal/agentportal" element={<AgentPortal/>}/>
<Route path="/partner-portal/agentportal/driverreg" element={<DriverReg/>}/>
<Route path="/partner-portal/agentportal/driverlog" element={<DriverLogin/>}/>
<Route path="/partner-portal/agentportal/drivernavigate" element={<DriverNavigate/>}/>







<Route path="/user-portal/hotels" element={<ViewHotels/>}/>
<Route path="/user-portal/hotels/booking/:hotelRegNo" element={<HotelBooking/>}/>


</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
