var express = require('express');
var router = express.Router();

/* http://localhost:8000/Vgt/vgtserver/member */
router.get('/vgtserver/member', function (req, res, next) {
  req.mysql.query("select * from member ", [],
    function (err, result) {
      res.send(JSON.stringify(result));
    }

  )
});
// http://localhost:8000/Vgt/vgtserver/member/4
router.get('/vgtserver/member/:vgtid', function (req, res, next) {
  req.mysql.query("select * from member where vgtid = ?",
    [req.params.vgtid],

    function (err, result) {
      res.send(JSON.stringify(result[0]));
    }
  )
});
router.post('/vgtserver/member', function (req, res, next) {
  req.mysql.query("insert into member (vgtname, account, password, truename, birthdate, trueid, email, phone, auth, vgtpoint, vgtpassword, eval) values (? ? ? ? ? ? ? ? ? ? ?))",
    [req.body.vgtname, req.body.account, req.body.password, req.body.truename, req.body.birthdate, req.body.trueid, req.body.email,
    req.body.phone, req.body.auth, req.body.vgtpoint, req.body.vgtpassword,req.body.eval],

    function (err, result) {
      res.send("inser ok");
    }
  )
});

router.put('/vgtserver/member', function (req, res, next) {
  req.mysql.query("update member set vgtname=?, account=?, password=?, truename=?, birthdate=?, trueid=?, email=?, phone=?,auth=?, vgtpoint=?, vgtpassword=?, eval=?  where vgtid=?  ",
    [req.body.vgtname, req.body.account, req.body.password, req.body.truename, req.body.birthdate, req.body.trueid, req.body.email,
    req.body.phone, req.body.auth, req.body.vgtpoint, req.body.vgtpassword, req.body.eval, req.body.vgtid],

    function (err, result) {
      res.send("Data update");
    }
  )
});
router.delete('/vgtserver/member/:vgtid', function (req, res, next) {
  req.mysql.query("delete from member where vgtid= ? ",
  [req.params.vgtid],
 
    function (err, result) {
      res.send("Data delet");
    }
  )
});



module.exports = router;
