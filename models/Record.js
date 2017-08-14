var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

var recordSchema = new mongoose.Schema({
  locationName: {type: String},
  locationAddress: {type: String},
});

module.exports = mongoose.model('Record', recordSchema);
