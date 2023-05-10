const mongoose = require('mongoose');

const hotelRoomSchema = new mongoose.Schema({
  roomType: {
    type: String,
    required: true,
  },
  numberOfAvailableRooms: {
    type: Number,
    required: true,
  },
  availableStartDate: {
    type: Date,
    required: true,
  },
  availableEndDate: {
    type: Date,
    required: true,
  },
  hotelRegistrationNumber: {
    type: String,
    required: true,
  },
});

const HotelRoom = mongoose.model('HotelRoom', hotelRoomSchema);

module.exports = HotelRoom;