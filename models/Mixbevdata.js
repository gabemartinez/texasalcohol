var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

var mixbevdataSchema = new mongoose.Schema({

  taxpayerNumber: Number,
  taxpayerName: String,
  taxpayerAddress: String,
  taxpayerCity: String,
  taxpayerState: String,
  taxpayerZip: Number,
  taxpayerCounty: Number,
  taxpayerPhone: Number,
  locationNumber: Number,
  locationName: String,
  locationAddress: String,
  locationCity: String,
  locationState: String,
  locationZip: Number,
  locationCounty: Number,
  locationPhone: Number,
  tabcPermitNumber: String,
  responsibilityBeginDate: Number,
  responsibilityEndDate: Number,
  obligationEndDate: Number,
  liquorReceipts: Number,
  wineReceipts: Number,
  beerReceipts: Number,
  returnTotal: Number

});

module.exports = mongoose.model('Mixbevdata', mixbevdataSchema);
