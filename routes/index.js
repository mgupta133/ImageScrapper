var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('scrapper.html', { title: 'Express' });
});

module.exports = router;
