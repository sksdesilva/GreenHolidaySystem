const mongoose = require('mongoose')
const {Schema} = mongoose;

const HotelSchema = new Schema({
    hotelName: {
        type: String,
        required: [true, 'Please provide a name'],
        trim: true,
        maxlength: [20, 'Name can not be more than 20 characters']
    },
    registrarNum: {
        type: String,
        required: [true, 'Please provide a registration number'],
        trim: true,
        maxlength: [20, 'Registration number can not be more than 20 characters']
    },
    category: {
        type: String,
        required: [true, 'Please select a category'],
        enum: ['1 Star', '2 Stars', '3 Stars', '4 Stars', '5 Stars']
    },
    starRate: {
        type: Number,
        required: [true, 'Please provide a star rating'],
        min: [1, 'Star rating must be at least 1'],
        max: [5, 'Star rating can not be more than 5']
    },
    address: {
        type: String,
        required: [true, 'Please provide an address'],
        trim: true,
        maxlength: [50, 'Address can not be more than 50 characters']
    },
    contactNum: {
        type: Number,
        required: [true, 'Please provide a contact number'],
        trim: true,
        minlength: [10, 'Contact number must be at least 10 digits'],
        maxlength: [12, 'Contact number can not be more than 12 digits']
    },
    ownerName: {
        type: String,
        required: [true, 'Please provide the owner\'s name'],
        trim: true,
        maxlength: [30, 'Owner\'s name can not be more than 30 characters']
    },
    mainCity: {
        type: String,
        required: [true, 'Please provide the main city'],
        trim: true,
        maxlength: [20, 'Main city can not be more than 20 characters']
    },
    hotelDescription: {
        type: String,
        required: [true, 'Please provide the description'],
        trim: true,
        maxlength: [400, 'description can not be more than 20 characters']
    },
    hotelImg: {
        type: String,
        trim: true,
    }
    
});

module.exports = mongoose.model('Hotel',HotelSchema)