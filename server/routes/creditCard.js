var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.put('/creditCard', function(req, res, next) {
  req.mysql.query('UPDATE member SET vgtpoint = ? WHERE vgtid = ?',
  [req.body.vgtpoint,req.body.vgtid],function(err,result){
      res.send(err);
  })
});

router.get('/storedValue/:vgtid', function(req, res, next) {

  const sqlSelect = "SELECT vgtpoint FROM member WHERE vgtid = ?";
  req.mysql.query(sqlSelect, [req.params.vgtid], (err, result) => {
      console.log(err);
      res.send(result);
  })
});


module.exports = router;
