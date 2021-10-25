var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/vgtserver/appeal', function(req, res, next) {
  req.mysql.query('select * from `appeal`',[],
  function(err,result){
    res.send(result);
  }
  )
});
router.get('/vgtserver/appeal/:appealid', function(req, res, next) {
  req.mysql.query('select * from appeal where appealid=? ',
  [req.params.appealid],
  function(err,result){
    res.send(result[0]);
  }
  )
});
router.post('/vgtserver/appeal/', function(req, res, next) {
  req.mysql.query('inser into appeal (appellantid, orderid, appealclass, appealdesc, appealdate, appealimg) values(? ? ? ? ? ?) ',
  [req.body.appellantid,req.body.orderid,req.body.appealclass,req.body.appealdesc,req.body.appealdate,req.body.appealimg],
  function(err,result){
    res.send("inser ok");
  }
  )
});
router.delete('/vgtserver/appeal/:appealid', function(req, res, next) {
  req.mysql.query('select * from `appeal`',[req.params.appealid],
  function(err,result){
    res.send("delete ok");
  }
  )
});






module.exports = router;
