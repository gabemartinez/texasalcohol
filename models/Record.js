var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

var recordSchema = new mongoose.Schema({
  locationName: String,
  locationAddress: String
});

module.exports = mongoose.model('Record', recordSchema);
