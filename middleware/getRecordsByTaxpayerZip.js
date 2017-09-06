var getRecordsByTaxpayerZip = function(req, res, next) {

  var mongoose = require('mongoose');
  mongoose.connect('mongodb://txalcread:blakk865@ds011860.mlab.com:11860/txalcapp');
  var connection = mongoose.connection;

  var input = req.params.input;

  var Mixbevdata = require('../models/Mixbevdata');

  Mixbevdata.find({ taxpayerZip: input }, function(err, records) {
    console.log(input);
    req.input = input;

    var liquorReceipts = 0;
    for (var i = 0; i < records.length; i++) {
      liquorReceipts += records[i].liquorReceipts;
    }

    var wineReceipts = 0;
    for (var i = 0; i < records.length; i++) {
      wineReceipts += records[i].wineReceipts;
    }

    var beerReceipts = 0;
    for (var i = 0; i < records.length; i++) {
      beerReceipts += records[i].beerReceipts;
    }

    var returnTotal = 0;
    for (var i = 0; i < records.length; i++) {
      returnTotal += records[i].returnTotal;
    }

    req.liquorReceipts = liquorReceipts;
    req.wineReceipts = wineReceipts;
    req.beerReceipts = beerReceipts;
    req.returnTotal = returnTotal;
    next();
  });

};

module.exports = getRecordsByTaxpayerZip;
