var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(res.get('X-XSS-Protection'));
  res.set("X-XSS-Protection", 0);
  res.render('index', { title: req.query.xss });
});

module.exports = router;
