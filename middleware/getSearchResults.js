var getSearchResults = function(req, res, next) {

  var mongoose = require('mongoose');
  mongoose.connect('mongodb://txalcread:blakk865@ds011860.mlab.com:11860/txalcapp');
  var connection = mongoose.connection;

  var keyword = req.body.keyword.toUpperCase();

  var Mixbevdata = require('../models/Mixbevdata');

  Mixbevdata.aggregate([
    { $match : { locationName: {$regex : ".*"+keyword+".*"} } },
    { $group: { "_id": { tabcPermitNumber: "$tabcPermitNumber", locationName: "$locationName", locationAddress: "$locationAddress" } } }
  ], function(err, records) {
    req.keyword = keyword;
    req.records = records;
    // console.log(records);
    next();
  });

};

module.exports = getSearchResults;
