const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for the HotelLogin model
const hotelLoginSchema = new Schema({
  hotelRegNo: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

// Create the HotelLogin model from the schema
const HotelLogin = mongoose.model('HotelLogin', hotelLoginSchema);

// Export the HotelLogin model
module.exports = HotelLogin;