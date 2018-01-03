var getRecordsByPermitNumber = function(req, res, next) {

  var mongoose = require('mongoose');
  mongoose.connect('mongodb://txalcread:blakk865@ds011860.mlab.com:11860/txalcapp');
  var connection = mongoose.connection;

  var permitnumber = req.body.permitnumber;

  var Mixbevdata = require('../models/Mixbevdata');

  Mixbevdata.find({ tabcPermitNumber: permitnumber }, function(err, records) {
    console.log(permitnumber);
    req.permitnumber = permitnumber;
    req.records = records;
    next();
  });

};

module.exports = getRecordsByPermitNumber;
