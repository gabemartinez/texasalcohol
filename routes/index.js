var express = require('express');
var router = express.Router();

var getRecordsByTaxpayerNumber = require('../middleware/getRecordsByTaxpayerNumber');
var getRecordsByTaxpayerZip = require('../middleware/getRecordsByTaxpayerZip');
var getRecordsByTABCPermitNumber = require('../middleware/getRecordsByTABCPermitNumber');

/* GET index page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'WIP' });
});

/* GET taxpayerNumber documents page. */
// ex. 32061059989
router.get('/taxpayernumber/:input', getRecordsByTaxpayerNumber, function(req, res, next) {
  var input = req.input;
  var records = req.records;
  res.json( { title: 'Documents by Taxpayer Number', input, records });
});

/* GET taxpayerZip documents page. */
// ex. 79924
router.get('/taxpayerzip/:input', getRecordsByTaxpayerZip, function(req, res, next) {
  var input = req.input;
  var records = req.records;
  res.json( { title: 'Documents by Taxpayer Zip', input, records });
});

/* GET tabcPermitNumber documents page. */
// ex. MB420026
router.get('/tabcpermitnumber/:input', getRecordsByTABCPermitNumber, function(req, res, next) {
  var input = req.input;
  var records = req.records;
  res.json( { title: 'Documents by TABC Permit Number', input, records });
});

module.exports = router;
