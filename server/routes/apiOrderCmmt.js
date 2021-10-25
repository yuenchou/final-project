var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/vgtserver/ordercmmt', function(req, res, next) {
  req.mysql.query('select * from ordercmmt',[],
  function(err,result){
    res.send(JSON.stringify(result));
  }
  )
});

router.get('/vgtserver/ordercmmt/:orderid', function(req, res, next) {
  req.mysql.query('select * from ordercmmt where orderid =?',[req.params.orderid],
  function(err,result){
    res.send(JSON.stringify(result[0]));
  }
  )
});

router.post('/vgtserver/ordercmmt/', function(req, res, next) {
  req.mysql.query('inser into orderid (cmmtid, cmmtdesc, cmmtdate) values(? ? ?)',
  [req.body.cmmtid, req.body.cmmtdesc, req.body.cmmtdate],
  function(err,result){
    res.send("inser ok");
  }
  )
});
router.put('/vgtserver/ordercmmt/:orderid', function(req, res, next) {
  req.mysql.query('update ordercmmt set cmmtid=? ,cmmtdesc=? ,  cmmtdate=? where orderid =? ',
  [req.body.cmmtid, req.body.cmmtdesc, req.body.cmmtdate,req.body.orderid],
  function(err,result){
    res.send("update ok");
  }
  )
});
router.delete('/vgtserver/ordercmmt/:orderid', function(req, res, next) {
  req.mysql.query('delete from ordercmmt wherer orderid = ? ',
  [req.params.orderid],
  function(err,result){
    res.send("delete ok");
  }
  )
});

module.exports = router;
