var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

var getRecordsByTABCpermitNumber = require('../middleware/getRecordsByTABCpermitNumber');
var getSearchResults = require('../middleware/getSearchResults');

/* GET index page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Texas MixedBev Analytics' });
});

/* GET search form page. */
// ex. input 929
router.get('/search/', function(req, res, next) {
  res.render('../views/search', { title: 'Search' });
});

/* POST permitnumber documents form page. */
// ex. input MB962929
router.post('/search/', urlencodedParser, getSearchResults, function(req, res, next) {

  var keyword = req.keyword;
  // console.log(keyword);

  var records = req.records;
  // console.log(records);

  var uniquelocationnames = req.uniquelocationnames;
  // console.log(uniquelocationnames);

  // var searchrecords = req.searchrecords;
  // console.log(searchrecords);

  res.render('../views/search-results', { title: 'Search Results', keyword, records });
  // res.json({keyword, records});
});

/* GET tabcPermitNumber documents report page. */
// ex. MB9...
router.get('/report/:input', getRecordsByTABCpermitNumber, function(req, res, next) {
  var input = req.input;
  var records = req.records;
  var allReturnTotals = req.allReturnTotals;
  var allReturnTotalsSecondary = req.allReturnTotalsSecondary;
  var allObligationEndDates = req.allObligationEndDates;


  // details
  // var taxpayerNumber = req.taxpayerNumber;
  // var taxpayerName = req.taxpayerName;
  // var taxpayerAddress = req.taxpayerAddress;
  // var taxpayerCity = req.taxpayerCity;
  // var taxpayerState = req.taxpayerState;
  // var taxpayerZip = req.taxpayerZip;
  // var taxpayerCounty = req.taxpayerCounty;
  // var taxpayerPhone = req.taxpayerPhone;
  // var locationNumber = req.locationNumber;
  var locationName = req.locationName;
  var locationAddress = req.locationAddress;
  var locationCity = req.locationCity;
  var locationState = req.locationState;
  var locationZip = req.locationZip;
  // var locationCounty = req.locationCounty;
  // var locationPhone = req.locationPhone;
  // var tabcPermitNumber = req.tabcPermitNumber;

  // var responsibilityBeginDate = req.responsibilityBeginDate;
  // var responsibilityEndDate = req.responsibilityEndDate;
  // var obligationEndDate = req.obligationEndDate;
  // details

  // totals
  // var liquorReceipts = req.liquorReceipts;
  // var wineReceipts = req.wineReceipts;
  // var beerReceipts = req.beerReceipts;
  // var returnTotal = req.returnTotal;
  // totals

  // res.json( { title: 'Documents by TABC Permit Number', input, records });

  // res.json( { title: 'Documents by TABC Permit Number', input, taxpayerNumber, taxpayerName, taxpayerAddress, taxpayerCity, taxpayerState, taxpayerZip, taxpayerCounty, taxpayerPhone, locationNumber, locationName, locationAddress, locationCity, locationState, locationZip, locationCounty, locationPhone, tabcPermitNumber, liquorReceipts, wineReceipts, beerReceipts, returnTotal });
  res.render('../views/report', { title: 'Return Total Report', input, records, allReturnTotals, allReturnTotalsSecondary, allObligationEndDates, locationName, locationAddress, locationCity, locationState, locationZip });
});

module.exports = router;
