var getRecords = function(req, res, next) {

  var mongoose = require('mongoose');
  mongoose.connect('mongodb://txalcread:blakk865@ds011860.mlab.com:11860/txalcapp');
  var connection = mongoose.connection;

  var permitnumber = req.params.permitnumber;
  console.log(permitnumber);

  var Record = require('../models/Record');

  Record.find(function (err, records) {
      if (err) {
          res.status(500).send(err)
      } else {
          // res.send(records);
          req.records = records;
          next();
      }
  });

  // next();

};

module.exports = getRecords;
