var express = require('express');
var router = express.Router();

// var getrecords = require('../middleware/getRecords');

var mongoose = require('mongoose');
var mongoconnection = 'mongodb://txalcread:blakk865@ds011860.mlab.com:11860/txalcapp';
mongoose.connect(mongoconnection);

var recordSchema = new mongoose.Schema({
  locationName: String,
  locationAddress: String
});

var Record = mongoose.model('Record', recordSchema);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Our App' });
});

/* GET tabcPermitNumber documents page. */
// ex. MB420026
router.get('/permitnumber/:permitnumber', function(req, res, next) {
  var permitnumber = req.params.permitnumber;
  // var allrecordsobject = req.allrecordsobject;

  Record.find()
  .then(function(doc){
    console.log(doc);
  })

  // res.render('permitnumber', { title: 'Documents by TABC Permit Number' });
  res.json( { title: 'Documents by TABC Permit Number', permitnumber });
});

module.exports = router;
