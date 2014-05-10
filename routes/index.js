var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/partial/:idpartial', function(req, res) {
  res.render('partials/' + req.params.idpartial);
});

[
    "fail-late-register",
    "late-register",
    "late-register-2",
    "lazy-load",
    "require"
].forEach(function (path){
    router.get('/' + path, function(req, res) {
      res.render(path);
    });
});

module.exports = router;
