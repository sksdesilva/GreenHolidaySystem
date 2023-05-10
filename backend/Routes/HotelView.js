const express = require('express')
const router = express.Router();


const {viewAllHotels, makeReservation, viewReservations} = require('../Controllers/HotelView');

router.route('/').get(viewAllHotels)
router.route('/makereservation').post(makeReservation);
router.route('/viewreservation/:registrarNum').get(viewReservations);

module.exports=router;