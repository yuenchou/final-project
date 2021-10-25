var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/vgtserver/vgtnews', function(req, res, next) {
  req.mysql.query('select * from vgtnews',[],
  
  function(err,result){
    res.send(JSON.stringify(result));
  }
  )
});

router.get('/vgtserver/vgtnews/:managerid', function(req, res, next) {
  req.mysql.query('select * from vgtnews',
  [req.params.managerid],
  
  function(err,result){
    res.send(JSON.stringify(result[0]));
  }
  )
});

router.post('/vgtserver/vgtnews', function(req, res, next) {
  req.mysql.query('inser into vgtnews (newstitle, newsdesc , newsdate ) values(? ? ?)',
  [req.body.newstitle, req.body.newsdesc, req.body.newsdate],
  
  function(err,result){
    res.send("inser ok");
  }
  )
});

router.put('/vgtserver/vgtnews/', function(req, res, next) {
  req.mysql.query('update vgtnews set newstitle=?, newsdesc=?, newsdate=?  where managerid=? ',
  [req.body.newstitle, req.body.newsdesc, req.body.newsdate,req.body.managerid],
  
  function(err,result){
    res.send("data update");
  }
  )
});

router.delete('/vgtserver/vgtnews/:managerid', function(req, res, next) {
  req.mysql.query('delete * from vgtnews where managerid=?',
  [req.params.managerid],
  
  function(err,result){
    res.send("delete ok");
  }
  )
});

module.exports = router;
