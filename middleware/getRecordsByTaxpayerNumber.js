var getRecordsByTaxpayerNumber = function(req, res, next) {

  var mongoose = require('mongoose');
  mongoose.connect('mongodb://txalcread:blakk865@ds011860.mlab.com:11860/txalcapp');
  var connection = mongoose.connection;

  var input = req.params.input;

  var Mixbevdata = require('../models/Mixbevdata');

  Mixbevdata.find({ taxpayerNumber: input }, function(err, records) {
    console.log(input);
    req.input = input;
    req.records = records;
    next();
  });

};

module.exports = getRecordsByTaxpayerNumber;
