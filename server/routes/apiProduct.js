var express = require('express');
var router = express.Router();

/* http://localhost:8000/Vgt/vgtserver/product/ */
router.get('/vgtserver/product', function(req, res, next) {
 req.mysql.query("select * from product ",[],
 function(err,result){
   res.send(JSON.stringify(result));
 }
 
)
});

router.get('/vgtserver/product/:vgtid', function(req, res, next) {
  req.mysql.query("select * from product where vgtid= ? ",
  [req.params.vgtid],
  function(err,result){
    res.send(JSON.stringify(result[0]));
  }
  
 )
 });

 router.post('/vgtserver/product/', function(req, res, next) {
  req.mysql.query("inser into product (productid, gamelist, gameserver, producttitle, productclass, productdesc, productquant, productimg, productprice, productdate, producttoorder) values(? ? ? ? ? ? ? ? ? ? ?) ",
  [req.body.productid,req.body.gamelist,req.body.gameserver,req.body.producttitle,req.body.productclass,
  req.body.productdesc,req.body.productquant,req.body.productimg,req.body.productprice,req.body.productdate,req.body.producttoorder],
  function(err,result){
    res.send("inser ok");
  }
  
 )
 });
 
 router.put('/vgtserver/product/',function(req,res,next){
  req.mysql.query("update product set productid=?, gamelist=?,gameserver=?,producttitle=?,productclass=?,productdesc=?,productquant=?,productimg=?,productprice=?,productdate=?,producttoorder=? where vgtid=?  ",
  [req.body.productid,req.body.gamelist,req.body.gameserver,req.body.producttitle,req.body.productclass,
    req.body.productdesc,req.body.productquant,req.body.productimg,req.body.productprice,req.body.productdate,req.body.producttoorder,req.body.vgtid],
  function(err,result){
    res.send("update ok")
  }
  )
 })
router.delete('/vgtserver/product/:vgtid',function(req,res,next){
req.mysql.query("delete from product where vgtid =?",
[req.params.vgtid],
function(err,result){
  res.send("delete ok")
}

)

})



module.exports = router;
