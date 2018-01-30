var getSearchResults2 = function(req, res, next) {

  var mongoose = require('mongoose');
  mongoose.connect('mongodb://txalcread:blakk865@ds011860.mlab.com:11860/txalcapp');
  var connection = mongoose.connection;

  var keyword = req.body.keyword.toUpperCase();
  // var keyword = "PASO";

  var Mixbevdata = require('../models/Mixbevdata');

  Mixbevdata.find({ locationName: {$regex : ".*"+keyword+".*"} }, function(err, records) {

    req.keyword = keyword;
    req.records = records;

    next();

  });

  // .distinct('locationName').exec(function(err, uniquelocationnames) {
  //
  //   req.uniquelocationnames = uniquelocationnames;
  //
  //   next();
  //
  // });

};

module.exports = getSearchResults2;
