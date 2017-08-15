var getRecords = function(req, res, next) {

  // var mongoose = require('mongoose');
  // var mongoconnection = 'mongodb://txalcread:blakk865@ds011860.mlab.com:11860/txalcapp';
  // mongoose.connect(mongoconnection);

  var mongoose = require("mongoose");
  mongoose.connect('mongodb://txalcread:blakk865@ds011860.mlab.com:11860/txalcapp');
  var connection = mongoose.connection;

  var permitnumber = req.params.permitnumber;
  // console.log(permitnumber);

  connection.on('error', console.error.bind(console, 'connection error:'));
  connection.once('open', function () {

      connection.db.collection("mixbevdata", function(err, collection){
          collection.find({"tabcPermitNumber":permitnumber}).toArray(function(err, data){
              console.log(data); // it will print your collection data
          })
      });

  });

  // var Record = require('../models/Record');

  // var allrecordsobject = [];

  // Record.find({"tabcPermitNumber": permitnumber}, function (err, records) {
  //     if (err) {
  //         res.status(500).send(err)
  //         console.log('error');
  //     } else {
  //         res.render('../views/pages/single-page-report', {reportid, pageid, buttonstests, unitnamegrade, globalasulinksgrade, buttonsgrade});
  //         console.log(records);
  //     }
  // });

  next();

};

module.exports = getRecords;
