const DriverN = require("../Models/DriverReg");

const addnewDriver = async (req,res) => {
    try{
      const Driver = await DriverN.create(req.body);

      if(Driver){
        res.status(200).json({Driver});
      }
      if(!Driver){
        res.status(404).json({msg : 'room added was unsucesfull. try again'});
      }
      
      }catch(error){
        res.status(500).json({error : error.message});
      }
    }

    const getDriver = async (req, res) =>{
        try{
        const {driverId} = req.params;  
        const Driver = await DriverN.findOne({driverId:driverId});
        if(Driver){
          res.status(200).json({Driver});
        }else 
          res.status(404).json({msg:'no driver with that id'});
      }catch(error){
        res.status(500).json({error : error.message});
      }
    }

    

    module.exports = {
        addnewDriver,
        getDriver
    }
