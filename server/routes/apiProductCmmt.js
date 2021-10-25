var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/vgtserver/productcmmt', function(req, res, next) {
  req.mysql.query('select * from productcmmt ',[],
  function(err,result){
    res.send(JSON.stringify(result));

  }
  );
});

router.get('/vgtserver/productcmmt/:productid', function(req, res, next) {
  req.mysql.query('select * from productcmmt where productid=? ',
  [req.params.productid],
  function(err,result){
    res.send(JSON.stringify(result[0]));

  }
  );
});
router.post('/vgtserver/productcmmt', function(req, res, next) {
  req.mysql.query('inser into productcmmt (cmmtid, cmmtauth, cmmtdesc, cmmtdate  ) values (? ? ? ?) ',
  [req.body.cmmtid,req.body.cmmtauth,req.body.cmmtdesc,req.body.cmmtdate],
  function(err,result){
    res.send('inser ok');

  }
  );
});
router.put('/vgtserver/productcmmt/:productid', function(req, res, next) {
  req.mysql.query('update productcmmt set cmmtid=?,cmmtauth=?, cmmtdesc=?, cmmtdate=? where productid=? ',
  [req.body.cmmtid,req.body.cmmtauth,req.body.cmmtdesc,req.body.cmmtdate,req.body.productid],
  function(err,result){
    res.send('update ok');

  }
  );
});
router.delete('/vgtserver/productcmmt/:productid', function(req, res, next) {
  req.mysql.query('delete from productcmmt where productid=? ',
  [req.params.productid],
  function(err,result){
    res.send('delete ok');

  }
  );
});

















module.exports = router;
