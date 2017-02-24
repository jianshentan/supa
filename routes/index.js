var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if (req.mobile == true) {
    res.render('index', { mobile: "true" });
  } else {
    res.render('index', { mobile: "false" });
  }
});

router.get('/faq', function(req, res, next) {
  res.render('faq');  
});

router.get('/terms-and-conditions', function(req, res, next) {
  res.render('terms');  
});

router.get('/privacy-policy', function(req, res, next) {
  res.render('privacy');  
});

module.exports = router;
