
const Hotel  =require("../Models/Hotels");
const HotelLogin = require("../Models/hotelLogin");
const HotelRoom = require("../Models/hotelRoom");



  // const createHotel = async (req, res) => {
  //   try {
  //     const order = await Hotel.create(req.body);
  //     res.status(200).json({ order });
  //   } catch (error) {
  //     res.status(500).json({ error: error.message });
  //   }
  // };

  const createHotelLogin = async (req, res) => {
    try {
      const hotelLogin = await HotelLogin.create(req.body);
      res.status(200).json({hotelLogin});
    }catch (error) {
      res.status(500).json({error : error.message});
    }
  }

  const viewHotelDetails = async (req, res) =>{
    try{
    const {registrarNum} = req.params;  
    const HotelDetails = await Hotel.findOne({registrarNum:registrarNum});
    if(HotelDetails){
      res.status(200).json({HotelDetails});
    }else 
      res.status(404).json({msg:'no hotel with that id'});
  }catch(error){
    res.status(500).json({error : error.message});
  }
}

  const updateHotel = async (req,res) =>{
    try{
    const {registrarNum} = req.params;
    const updateHotelDetail = await Hotel.findOneAndUpdate({registrarNum:registrarNum},req.body,{
      new:true,
      runValidators: true,
  }); 

    if(updateHotelDetail){
      res.status(200).json(updateHotelDetail)
    }
    
    if(!updateHotelDetail){
      res.status(404).json({msg : 'updatation was unsuccesfull' });
    }

    }catch(error){
      res.status(500).json({error : error.message});
    }
  }

  const addHotelRoom = async (req,res) => {
    try{
      const {registrarNum} = req.params;
      const addHotelRoom = await HotelRoom.create(req.body);

      if(addHotelRoom){
        res.status(200).json({addHotelRoom});
      }
      if(!addHotelRoom){
        res.status(404).json({msg : 'room added was unsucesfull. try again'});
      }
      
      }catch(error){
        res.status(500).json({error : error.message});
      }
    }
  

  const deleteAccount = async (req,res) => {
    try{
      const {registrarNum} = req.params;
      const deleteHotel = await Hotel.findOneAndDelete({registrarNum});

      if(deleteHotel){
        res.status(200).json(deleteHotel);
      }
      if(!deleteHotel){
        res.status(404).json({msg : 'no hotel with that register number'});
      }

    }catch(error){
      res.status(500).json({error : error.message});
    }
  }


  const validatePassword = async (req,res) => {
    try {
      const {hotelRegNo,password}=req.body;
      const hotelLogin = await HotelLogin.findOne({hotelRegNo});

      if(!hotelLogin){
        res.status(404).json({msg:'no hotel with that reg no'});
        return -1;
        ggg
      }

      if (hotelLogin.password === password){
        res.status(200).json({hotelLogin})
      }else {
        res.status(404).json({msg:'username or password was incorrect'})
      }
    }catch(error){
      res.status(500).json({error : error.message});
    }
  }



module.exports = {
    createHotelLogin,
    validatePassword,
    viewHotelDetails,
    updateHotel,
    deleteAccount,
    addHotelRoom
}