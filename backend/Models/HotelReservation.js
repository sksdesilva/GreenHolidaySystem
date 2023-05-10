const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for the HotelReservation model
const hotelReservationSchema = new Schema({
  registrarNum: {
    type: String,
    required: true
  },
  reservationId: {
    type: String,
    required: true,
    unique: true
  },
  guestName: {
    type: String,
    required: true
  },
  roomType: {
    type: String,
    required: true
  },
  numberOfNights: {
    type: Number,
    required: true
  },
  totalPrice: {
    type: Number,
    required: true
  },
  checkInDate: {
    type: Date,
    required: true
  },
  checkOutDate: {
    type: Date,
    required: true
  }
});

// Create the HotelReservation model from the schema
const HotelReservation = mongoose.model('HotelReservation', hotelReservationSchema);

// Export the HotelReservation model
module.exports = HotelReservation;