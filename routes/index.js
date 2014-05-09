var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});



["fail-late-register","lazy-register","lazy-load","require"].forEach(function (path){
    router.get('/' + path, function(req, res) {
      res.render(path);
    });
});

module.exports = router;
