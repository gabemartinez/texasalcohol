var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

var getRecordsByTaxpayerNumber = require('../middleware/getRecordsByTaxpayerNumber');
var getRecordsByTaxpayerZip = require('../middleware/getRecordsByTaxpayerZip');
var getRecordsByPermitNumber = require('../middleware/getRecordsByPermitNumber');
var getSearchResults = require('../middleware/getSearchResults');

/* GET index page. */
router.get('/', function(req, res, next) {

  res.render('index', { title: 'WIP' });
});

/* GET taxpayerNumber documents page. */
// ex. 32061059989
router.get('/taxpayernumber/:input', getRecordsByTaxpayerNumber, function(req, res, next) {
  var input = req.input;

  // details
  var taxpayerNumber = req.taxpayerNumber;
  var taxpayerName = req.taxpayerName;
  var taxpayerAddress = req.taxpayerAddress;
  var taxpayerCity = req.taxpayerCity;
  var taxpayerState = req.taxpayerState;
  var taxpayerZip = req.taxpayerZip;
  var taxpayerCounty = req.taxpayerCounty;
  var taxpayerPhone = req.taxpayerPhone;
  var locationNumber = req.locationNumber;
  var locationName = req.locationName;
  var locationAddress = req.locationAddress;
  var locationCity = req.locationCity;
  var locationState = req.locationState;
  var locationZip = req.locationZip;
  var locationCounty = req.locationCounty;
  var locationPhone = req.locationPhone;
  var tabcPermitNumber = req.tabcPermitNumber;
  // var responsibilityBeginDate = req.responsibilityBeginDate;
  // var responsibilityEndDate = req.responsibilityEndDate;
  // var obligationEndDate = req.obligationEndDate;
  // details

  // totals
  var liquorReceipts = req.liquorReceipts;
  var wineReceipts = req.wineReceipts;
  var beerReceipts = req.beerReceipts;
  var returnTotal = req.returnTotal;
  // totals

  // res.json( { title: 'Documents by Taxpayer Number', input, taxpayerNumber, taxpayerName, taxpayerAddress, taxpayerCity, taxpayerState, taxpayerZip, taxpayerCounty, taxpayerPhone, locationNumber, locationName, locationAddress, locationCity, locationState, locationZip, locationCounty, locationPhone, tabcPermitNumber, liquorReceipts, wineReceipts, beerReceipts, returnTotal });

  res.render('../views/taxpayernumber', { input, taxpayerNumber, taxpayerName, taxpayerAddress, taxpayerCity, taxpayerState, taxpayerZip, taxpayerCounty, taxpayerPhone, locationNumber, locationName, locationAddress, locationCity, locationState, locationZip, locationCounty, locationPhone, tabcPermitNumber, liquorReceipts, wineReceipts, beerReceipts, returnTotal });
});

/* GET search form page. */
// ex. input 929
router.get('/search/', function(req, res, next) {

  res.render('../views/search');
});

/* POST permitnumber documents form page. */
// ex. input MB962929
router.post('/search/', urlencodedParser, getSearchResults, function(req, res, next) {

  var keyword = req.keyword;
  var records = req.records;
  var uniquepermitnumbers = req.uniquepermitnumbers;
  console.log(keyword);
  console.log(records);
  console.log(uniquepermitnumbers);

  res.render('../views/search-results', { uniquepermitnumbers });
  // res.json({uniquepermitnumbers});
});

/* GET permitnumber documents form page. */
// ex. input MB962929
router.get('/permitnumberform/', function(req, res, next) {

  res.render('../views/permitnumberform');
});

/* POST permitnumber documents form page. */
// ex. input MB962929
router.post('/permitnumberform/', urlencodedParser, getRecordsByPermitNumber, function(req, res, next) {

  var permitnumber = req.permitnumber;
  console.log('input: ' + permitnumber);
  // var records = req.records;

  var tabcPermitNumber = req.tabcPermitNumber;
  var taxpayerName = req.taxpayerName;
  var taxpayerAddress = req.taxpayerAddress;
  var taxpayerCity = req.taxpayerCity;
  var taxpayerState = req.taxpayerState;
  var taxpayerZip = req.taxpayerZip;
  var taxpayerCounty = req.taxpayerCounty;
  var taxpayerPhone = req.taxpayerPhone;

  var liquorReceipts = req.liquorReceipts;
  var wineReceipts = req.wineReceipts;
  var beerReceipts = req.beerReceipts;
  var returnTotal = req.returnTotal;

  res.render('../views/permitnumberform-success', { permitnumber, tabcPermitNumber, taxpayerName, taxpayerAddress, taxpayerCity, taxpayerState, taxpayerZip, taxpayerCounty, taxpayerPhone, liquorReceipts, wineReceipts, beerReceipts, returnTotal });
});

/* GET taxpayerZip documents page. */
// ex. 79924
router.get('/taxpayerzip/:input', getRecordsByTaxpayerZip, function(req, res, next) {
  var input = req.input;

  // totals
  var liquorReceipts = req.liquorReceipts;
  var wineReceipts = req.wineReceipts;
  var beerReceipts = req.beerReceipts;
  var returnTotal = req.returnTotal;
  // totals

  res.json( { title: 'Documents by Taxpayer Zip', input, liquorReceipts, wineReceipts, beerReceipts, returnTotal });
});

/* GET tabcPermitNumber documents page. */
// ex. MB420026
// router.get('/tabcpermitnumber/:input', getRecordsByTABCPermitNumber, function(req, res, next) {
//   var input = req.input;
//   var records = req.records;
//   res.json( { title: 'Documents by TABC Permit Number', input, records });
// });

module.exports = router;
