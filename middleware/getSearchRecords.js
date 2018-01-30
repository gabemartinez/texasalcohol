var getSearchRecords = function(req, res, next) {

  var mongoose = require('mongoose');
  mongoose.connect('mongodb://txalcread:blakk865@ds011860.mlab.com:11860/txalcapp');
  var connection = mongoose.connection;

  var uniquepermitnumbers = req.uniquepermitnumbers;

  console.log(uniquepermitnumbers);

  var Mixbevdata = require('../models/Mixbevdata');

  Mixbevdata.find({ tabcPermitNumber: uniquepermitnumbers }, function(err, searchrecords) {

    req.searchrecords = searchrecords;

    next();

  });

};

module.exports = getSearchRecords;
