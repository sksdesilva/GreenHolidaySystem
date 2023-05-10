const express = require('express')
const router = express.Router();
const multer = require('multer');
const Hotel = require('../Models/Hotels');
const { createHotelLogin, validatePassword, viewHotelDetails, updateHotel, deleteAccount, addHotelRoom } = require('../Controllers/Hotel');

const storage = multer.diskStorage({
    destination: (req,file,callback) => {
        callback(null,"../frontend/public/hoteluploads/");
    },
    filename: (req,file,callback) => {
        callback(null,file.originalname);
    }
});

const upload = multer({storage: storage});

// const {viewAllHotels,createHotel} = require('../Controllers/Hotel');


//creating routes

// router.route('/').get(viewAllHotels)

router.route('/createlogin').post(createHotelLogin);
router.route('/login').post(validatePassword);
router.route('/viewhotel/:registrarNum').get(viewHotelDetails);
router.route('/viewhotel/:registrarNum').patch(updateHotel);
router.route('/viewhotel/:registrarNum').delete(deleteAccount);
router.route('/viewhotel/:registrarNum').post(addHotelRoom);


router.post("/", upload.single("hotelImg"), async (req, res) => {
  if (!req.file) {
    return res.status(400).json('No file uploaded');
  }
    const newHotel = new Hotel({
      hotelName: req.body.hotelName,
      registrarNum: req.body.registrarNum,
      category: req.body.category,
      starRate: req.body.starRate,
      address: req.body.address,
      contactNum: req.body.contactNum,
      ownerName: req.body.ownerName,
      mainCity: req.body.mainCity,
      hotelDescription: req.body.hotelDescription,
      hotelImg: req.file.originalname
    });

    newHotel
      .save()
      .then(()=> res.status(200).json("New hotel added succesfully"))
      .catch((err) => res.status(400).json(`Error: ${err}`))
  });

module.exports = router