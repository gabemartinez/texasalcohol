var getRecords = function(req, res, next) {

  var mongoose = require('mongoose');
  mongoose.connect('mongodb://txalcread:blakk865@ds011860.mlab.com:11860/txalcapp');
  var connection = mongoose.connection;

  var tabcpermitnumber = req.params.tabcpermitnumber;
  console.log(tabcpermitnumber);

  var Mixbevdata = require('../models/Mixbevdata');

  Mixbevdata.find({ tabcPermitNumber: tabcpermitnumber }, function(err, records) {
    // console.log(records);
    req.records = records;
    next();
  });

};

module.exports = getRecords;
