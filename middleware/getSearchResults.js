var getSearchResults = function(req, res, next) {

  var mongoose = require('mongoose');
  mongoose.connect('mongodb://txalcread:blakk865@ds011860.mlab.com:11860/txalcapp');
  var connection = mongoose.connection;

  var keyword = req.body.keyword.toUpperCase();

  var Mixbevdata = require('../models/Mixbevdata');

  Mixbevdata.findOne({ tabcPermitNumber: {$regex : "^" + keyword} }, function(err, records) {

    req.keyword = keyword;
    req.records = records;

    // next();

  }).distinct('tabcPermitNumber').exec(function(err, uniquepermitnumbers) {

    req.uniquepermitnumbers = uniquepermitnumbers;

    next();

  });

};

module.exports = getSearchResults;
