var getRecords = function(req, res, next) {

  var mongoose = require('mongoose');
  var mongoconnection = 'mongodb://txalcread:blakk865@ds011860.mlab.com:11860/txalcapp';
  mongoose.connect(mongoconnection);

  var permitnumber = req.params.permitnumber;
  // console.log(permitnumber);

  var Record = require('../models/Record');
  // console.log(Record);

  // var allrecordsobject = [];

  Record.find({"tabcPermitNumber": permitnumber}, function (err, records) {
      if (err) {
          // res.status(500).send(err)
          console.log('error');
      } else {
          // res.render('../views/pages/single-page-report', {reportid, pageid, buttonstests, unitnamegrade, globalasulinksgrade, buttonsgrade});
          console.log(records);
      }
  });

  next();

};

module.exports = getRecords;
