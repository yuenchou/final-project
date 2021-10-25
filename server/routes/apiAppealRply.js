const { json } = require('express');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/vgtserver/appealrply', function(req, res, next) {
 req.mysql.query("select * from appealrply ",[],
 function(err,result){
   res.send(JSON.stringify(result));
 }
 )
});

router.get('/vgtserver/appealrply/:appealid', function(req, res, next) {
  req.mysql.query("select * from appealrply ",
  [req.params.appealid],
  function(err,result){
    res.send(JSON.stringify(result[0]));
  }
  )
 });

 router.post('/vgtserver/appealrply', function(req, res, next) {
  req.mysql.query("inser into appealrply( managerid, replydesc, replydate ) values(? ? ?) ",
  [req.body.managerid,req.body.replydesc,req.body.replydate],
  function(err,result){
    res.send("inser ok");
  }
  )
 });
 router.put('/vgtserver/appealrply', function(req, res, next) {
  req.mysql.query("update appealrply set managerid=?, replydesc=?, replydate=?  where appealid=?",
  [req.body.managerid,req.body.replydesc,req.body.replydate,req.body.appealid],
  function(err,result){
    res.send("data update");
  }
  )
 });

 router.delete('/vgtserver/appealrply/:appealid', function(req, res, next) {
  req.mysql.query("select * from appealrply where appealid=? ",
  [req.params.appealid],
  function(err,result){
    res.send("delete ok");
  }
  )
 });
module.exports = router;
