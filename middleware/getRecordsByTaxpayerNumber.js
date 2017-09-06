var getRecordsByTaxpayerNumber = function(req, res, next) {

  var mongoose = require('mongoose');
  mongoose.connect('mongodb://txalcread:blakk865@ds011860.mlab.com:11860/txalcapp');
  var connection = mongoose.connection;

  var input = req.params.input;

  var Mixbevdata = require('../models/Mixbevdata');

  Mixbevdata.find({ taxpayerNumber: input }, function(err, records) {
    console.log(input);
    req.input = input;

    req.taxpayerNumber = records[0].taxpayerNumber;
    req.taxpayerName = records[0].taxpayerName;
    req.taxpayerAddress = records[0].taxpayerAddress;
    req.taxpayerCity = records[0].taxpayerCity;
    req.taxpayerState = records[0].taxpayerState;
    req.taxpayerZip = records[0].taxpayerZip;
    req.taxpayerCounty = records[0].taxpayerCounty;
    req.taxpayerPhone = records[0].taxpayerPhone;

    req.locationNumber = records[0].locationNumber;
    req.locationName = records[0].locationName;
    req.locationAddress = records[0].locationAddress;
    req.locationCity = records[0].locationCity;
    req.locationState = records[0].locationState;
    req.locationZip = records[0].locationZip;
    req.locationCounty = records[0].locationCounty;
    req.locationPhone = records[0].locationPhone;

    req.tabcPermitNumber = records[0].tabcPermitNumber;
    // req.responsibilityBeginDate = records[0].responsibilityBeginDate;
    // req.responsibilityEndDate = records[0].responsibilityEndDate;
    // req.obligationEndDate = records[0].obligationEndDate;

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

module.exports = getRecordsByTaxpayerNumber;
