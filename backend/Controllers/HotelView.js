const hotelView = require('../Models/Hotels');
const HotelReservation = require('../Models/HotelReservation');

const viewAllHotels = async (req, res) => {
    try{
        const hotelList = await hotelView.find({});
        res.status(200).json({hotelList});
    }catch(error){
        res.status(500).json({error:error.message});
    }
}


const makeReservation = async (req,res) =>{
  try{
    const createResevation = await HotelReservation.create(req.body);
    res.status(200).json({createResevation});
  }catch(error){
    res.status(500).json({error:error.message});
  }
}

const viewReservations = async (req,res) => {
  try{
    const {registrarNum} = req.params;
    const viewReservations = await HotelReservation.find({registrarNum:registrarNum});

    if(viewReservations){
      res.status(200).json({viewReservations});
    }
    if(!viewReservations){
      res.status(404).json({msg:'no reservations'});
    }
  }catch(error){
    res.status(500).json({error:error.message});
  }

}


  module.exports = {
    viewAllHotels,
    makeReservation,
    viewReservations
  }



//   const createHotel = async (req, res) => {
//     try {
//       const order = await Hotel.create(req.body);
//       res.status(200).json({ order });
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   };