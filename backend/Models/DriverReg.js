const mongoose = require('mongoose');

const driverSchema = new mongoose.Schema({
  driverId: { type: String, required: true },
  driverNIC: { type: String, required: true },
  driverExp: { type: Number, required: true },
  driverName: { type: String, required: true },
  driverAccidents: { type: Number, required: true },
});

const Driver = mongoose.model('Driver', driverSchema);

module.exports = Driver;