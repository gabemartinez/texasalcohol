var express = require('express');
var router = express.Router();

var getrecords = require('../middleware/getRecords');

// var mongoose = require('mongoose');
// var mongoconnection = 'mongodb://txalcread:blakk865@ds011860.mlab.com:11860/txalcapp';
// mongoose.connect(mongoconnection);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Our App' });
});

/* GET tabcPermitNumber documents page. */
// ex. MB420026
router.get('/permitnumber/:permitnumber', getrecords, function(req, res, next) {
  var permitnumber = req.params.permitnumber;
  var records = req.records;
  console.log(records);

  // res.render('permitnumber', { title: 'Documents by TABC Permit Number' });
  res.json( { title: 'Documents by TABC Permit Number', permitnumber, records });
});

module.exports = router;
