var getRecordsByPermitNumber = function(req, res, next) {

  var mongoose = require('mongoose');
  mongoose.connect('mongodb://txalcread:blakk865@ds011860.mlab.com:11860/txalcapp');
  var connection = mongoose.connection;

  var currencyFormatter = require('currency-formatter');
  var phoneFormatter = require('phone-formatter');

  var permitnumber = req.body.permitnumber;

  var Mixbevdata = require('../models/Mixbevdata');

  Mixbevdata.find({ tabcPermitNumber: permitnumber }, function(err, records) {
    req.permitnumber = permitnumber;
    // req.records = records;

    req.tabcPermitNumber = records[0].tabcPermitNumber;
    req.taxpayerName = records[0].taxpayerName.replace(/\s*$/,"");
    req.taxpayerAddress = records[0].taxpayerAddress.replace(/\s*$/,"");
    req.taxpayerCity = records[0].taxpayerCity.replace(/\s*$/,"");
    req.taxpayerState = records[0].taxpayerState.replace(/\s*$/,"");
    req.taxpayerZip = records[0].taxpayerZip;
    req.taxpayerCounty = records[0].taxpayerCounty;
    req.taxpayerPhone = phoneFormatter.format(records[0].taxpayerPhone.toString(), "(NNN) NNN-NNNN");

    req.locationNumber = records[0].locationNumber;
    req.locationName = records[0].locationName.replace(/\s*$/,"");
    req.locationAddress = records[0].locationAddress.replace(/\s*$/,"");
    req.locationCity = records[0].locationCity.replace(/\s*$/,"");
    req.locationState = records[0].locationState.replace(/\s*$/,"");
    req.locationZip = records[0].locationZip;
    req.locationCounty = records[0].locationCounty;
    req.locationPhone = phoneFormatter.format(records[0].locationPhone.toString(), "(NNN) NNN-NNNN");

    req.tabcPermitNumber = records[0].tabcPermitNumber.replace(/\s*$/,"");

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

    req.liquorReceipts = currencyFormatter.format(liquorReceipts, { code: 'USD' });
    req.wineReceipts = currencyFormatter.format(wineReceipts, { code: 'USD' });
    req.beerReceipts = currencyFormatter.format(beerReceipts, { code: 'USD' });
    req.returnTotal = currencyFormatter.format(returnTotal, { code: 'USD' });
    next();

  });

};

module.exports = getRecordsByPermitNumber;
