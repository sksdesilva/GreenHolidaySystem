const express = require('express')
const router = express.Router();
const multer = require('multer');
const Hotel = require('../Models/Hotels');
const { addnewDriver , getDriver } = require('../Controllers/Driver');

router.route('/createaccount').post(addnewDriver);
router.route('/getaccount/:driverId').get(getDriver);

module.exports = router