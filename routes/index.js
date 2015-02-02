var express = require('express');
var router = express.Router();

//var tinder = require('tinderjs');
//var client = new tinder.TinderClient();
//var _ = require('underscore')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/fuckit', function(req, res, next) {

});

module.exports = router;
