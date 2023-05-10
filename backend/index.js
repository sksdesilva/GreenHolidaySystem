const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const Hotel = require('./Routes/Hotel');
const HotelView = require('./Routes/HotelView');
const connectDB = require('./Database/Connect');
const Driver = require('./Routes/Driver');

app.use(express.json());
app.use(cors());

const port = 8000;

//hotel management system routes
app.use('/Hotel/profile',Hotel);
app.use('/hotels',HotelView);
app.use('/driver',Driver);



//customer routes




const start = async () =>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log('server is listning'));
    }catch (error){
        console.log(error);
    }
       
    }

start()