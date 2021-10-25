const { json } = require('express');
var express = require('express');
var router = express.Router();


// 買家會員中心
// 使用者回到購物車後先將"使用者的"購物車DB資料的checked改回0
router.get('/memberPage/buyerInfo/tradeCart/clearCart/:vgtid', function (req, res, next) {
  var sqlsyn = 'UPDATE `cart` SET `checked`= 0 WHERE cartvgtid =?';
  req.mysql.query(sqlsyn, [req.params.vgtid], function (err, result) {
    res.send(JSON.stringify(result));
  })
});

// 會員中心頁面 => 購物車
// 以登入者sessionid從DB購物車(cart)取得資料帶出商品
router.get('/memberPage/buyerInfo/tradeCart/:userid', function (req, res, next) {
  var sqlsyn = 'SELECT * FROM cart c JOIN product p ON p.productid = c.productid WHERE c.cartvgtid=?';
  req.mysql.query(sqlsyn, [req.params.userid], function (err, result) {
    res.send(JSON.stringify(result));
  })
});

// 會員中心頁面 => 把使用者操作的資料加進購物車
router.post('/memberPage/buyerInfo/tradeCart/:productid', function (req, res) {
  var sqlsyn = 'UPDATE `cart` SET `productprice`=?, `cartnum`=?, checked=? WHERE productid=? && cartvgtid=?';
  req.mysql.query(sqlsyn, [req.body.productprice, req.body.cartnum, req.body.checked, req.params.productid, req.body.cartvgtid], function (err, result) {
    res.send(JSON.stringify(result));
  })
})

// 購物車操作後 => 結帳頁面
// 依使用者ID、購物車資訊抓商品資料
router.get('/memberPage/buyer/tradecart/:userid', function (req, res) {
  var sqlsyn = 'SELECT * FROM `cart` c JOIN product p ON p.productid = c.productid WHERE checked = 1 && c.cartvgtid =?';
  req.mysql.query(sqlsyn, [req.params.userid], function (err, result) {
    res.send(JSON.stringify(result));
  })
})

// 結帳頁面
// 依使用者ID，取得使用者資訊
router.get('/memberPage/buyer/tradecart/buyerinfo/:userid', function (req, res) {
  var sqlsyn = 'SELECT * FROM `member` WHERE vgtid=?';
  req.mysql.query(sqlsyn, [req.params.userid], function (err, result) {
    res.send(JSON.stringify(result));
  })
})

// 結帳頁面
// 依使用者ID取得使用者商品折扣
router.get('/memberPage/buyer/tradecart/buyerdiscount/:userid', function (req, res) {
  var sqlsyn = 'SELECT * FROM `member` m JOIN vgtdiscount vd ON vd.vgtid = m.vgtid WHERE m.vgtid=?';
  req.mysql.query(sqlsyn, [req.params.userid], function (err, result) {
    res.send(JSON.stringify(result));
  })
})

// 以使用者餘額付款
router.post('/memberPage/buyer/tradecart/buyerinfo/setvgtpoint', function (req, res) {
  var sqlsyn = 'UPDATE `member` SET `vgtpoint`=?  WHERE vgtid=?';
  req.mysql.query(sqlsyn, [req.body.newvgtpoint, req.body.vgtid], function (err, result) {
    res.send(JSON.stringify(result));
  })
})

// 結帳頁面
// 將使用者信用卡資料輸入DB
router.post('/memberPage/buyer/tradecart/buyerinfo/creditcardinfo', function (req, res) {
  var sqlsyn = 'INSERT INTO `ordercreditrecord`(`buyerid`, `creditcardid`, `creditcardname`, `creditprice`, `discount`) VALUES (?,?,?,?,?)';
  req.mysql.query(sqlsyn, [req.body.vgtid, req.body.creditcardid, req.body.creditcardname, req.body.total, req.body.discount], function (err, result) {
    res.send(JSON.stringify(result));
  })
})

// 結帳頁面
// 將結帳使用的折扣序號改為2
router.post('/memberPage/buyer/tradecart/buyerinfo/discountuse', function (req, res) {
  var sqlsyn = 'UPDATE `vgtdiscount` SET `discountuse`= 2 WHERE vgtid = ? && discountprice =?';
  req.mysql.query(sqlsyn, [req.body.vgtid, req.body.discount], function (err, result) {
    res.send(JSON.stringify(result));
  })
})

// 依購物車選取結帳商品及數量後
// 確認付款後生成訂單
router.post('/memberPage/buyer/tradecart/buyerinfo/createorder', function (req, res) {
  var sqlsyn = 'INSERT INTO `order`(`buyerid`, `orderprice`, `productid`, `orderstate`, `creditcardid`) VALUES (?, ?, ?, ?, ?)'
  req.mysql.query(sqlsyn, [req.body.buyerid, req.body.orderprice, req.body.productid, 2, req.body.creditcardid], function (err, result) {
    res.send(JSON.stringify(result));
  })
})

// 結帳後清除購物車內資訊
router.post('/memberPage/buyer/tradecart/buyerinfo/clearcart', function (req, res) {
  var sqlsyn = 'DELETE FROM `cart` WHERE productid =?';
  req.mysql.query(sqlsyn, [req.body.productid], function (err, result) {
    res.send(JSON.stringify(result));
  })
})





// 會員中心頁面 => 我的訂單
// 以登入者sessionid(buyerid)篩選訂單資料
router.get('/memberPage/buyerInfo/tradeOrder/:userid', function (req, res, next) {
  var sqlsyn = 'SELECT o.orderid, p.producttitle, o.orderprice FROM `order` o JOIN product p on p.productid = o.productid WHERE orderstate = 2 && o.buyerid = ?';
  req.mysql.query(sqlsyn, [req.params.userid], function (err, result) {
    res.send(JSON.stringify(result));
  })
});

// buyer/tradeprocess 訂單頁面(交易流程二)
// 以訂單的buyerid作篩選，並根據訂單編號抓取商品資料 
router.get('/memberPage/buyer/tradeprocess/:orderid', function (req, res, next) {
  var sqlsyn = 'SELECT p.producttitle, p.vgtid, p.gamelist, p.gameserver, p.productclass, o.charactername, o.characterdesc FROM `order` o JOIN product p on p.productid = o.productid WHERE orderstate = 2 && o.orderid = ?';
  req.mysql.query(sqlsyn, [req.params.orderid], function (err, result) {
    res.send(JSON.stringify(result));
  })
});

// buyinTrade_charac 交易流程二 寫入角色資料
router.post('/memberPage/buyer/tradeprocess/updatecharacter', function (req, res) {
  var sqlsyn = 'UPDATE `order` SET `charactername` = ?, `characterdesc`= ?, orderstate=? WHERE `orderid` = ?';
  req.mysql.query(sqlsyn, [req.body.charactername, req.body.characterdesc, 3, req.body.orderid], function (err, result) {
    res.send(JSON.stringify(result));
  })
})

// 會員中心頁面 => 交易中商品(交易流程三)
// 抓buyerid為登入帳號sessionid的訂單資料
router.get('/memberPage/buyerInfo/tradeReceive/:userid', function (req, res, next) {
  var sqlsyn = 'SELECT o.orderid, p.producttitle, p.productprice FROM `order` o JOIN product p on p.productid = o.productid WHERE orderstate = 3 && o.buyerid = ?';
  req.mysql.query(sqlsyn, [req.params.userid], function (err, result) {
    res.send(JSON.stringify(result));
  })
});

// buyer/tradereceive 訂單頁面(交易流程三)
// 以訂單的buyerid作篩選，根據訂單編號(orderid)抓取商品資料(product)
router.get('/memberPage/buyer/tradereceive/:orderid', function (req, res, next) {
  var sqlsyn = 'SELECT p.producttitle, p.vgtid, p.gamelist, p.productclass, p.gameserver, o.buyerid, o.charactername, o.characterdesc FROM `order` o JOIN product p on p.productid = o.productid WHERE o.orderstate = 3 && o.orderid = ?';
  req.mysql.query(sqlsyn, [req.params.orderid], function (err, result) {
    res.send(JSON.stringify(result));
  })
});

// buyer/tradereceive 訂單頁面(交易流程三) 
// 以orderid取得留言資料(ordercmmt)
router.get('/memberPage/buyer/tradereceive/:orderid/cmmt', function (req, res, next) {
  var sqlsyn = 'SELECT oc.cmmtid, oc.cmmtdesc, oc.cmmtdate FROM `order` o JOIN ordercmmt oc on oc.orderid = o.orderid WHERE o.orderid = ?'
  req.mysql.query(sqlsyn, [req.params.orderid], function (err, result) {
    res.send(JSON.stringify(result));
  })
});

// 留言功能
// 根據訂單編號寫入留言資訊
router.post('/memberPage/buyer/tradereceive/insertcmmt', function (req, res) {
  var sqlsyn = 'INSERT INTO `ordercmmt`(`orderid`, `cmmtid`, `cmmtdesc`) VALUES (?, ?, ?)';
  req.mysql.query(sqlsyn, [req.body.orderid, req.body.cmmtid, req.body.insertcmmt], function (err, result) {
    res.send(JSON.stringify(result));
  })
})

// 會員中心頁面 => 領收、評價商品(交易流程四)
router.get('/memberPage/buyerInfo/tradeComplete/:userid', function (req, res, next) {
  var sqlsyn = 'SELECT o.orderid, p.producttitle, p.productprice FROM `order` o JOIN product p on p.productid = o.productid WHERE (o.orderstate = 4 OR o.orderstate = 5) && o.buyerid = ?'
  req.mysql.query(sqlsyn, [req.params.userid], function (err, result) {
    res.send(JSON.stringify(result));
  })
});

// buyer/tradecomplete 訂單頁面(交易流程四)
// 以訂單的buyerid作篩選，並根據訂單編號抓取商品資料 
router.get('/memberPage/buyer/tradebuyercomplete/:orderid', function (req, res, next) {
  var sqlsyn = 'SELECT p.producttitle, p.vgtid, p.gamelist, p.productclass, p.gameserver, o.buyerid, o.orderstate, o.charactername, o.characterdesc FROM `order` o JOIN product p on p.productid = o.productid WHERE (o.orderstate = 4 OR o.orderstate = 5) && o.orderid = ?';
  req.mysql.query(sqlsyn, [req.params.orderid], function (err, result) {
    res.send(JSON.stringify(result));
  })
});

// buyer/tradecomplete 訂單頁面(交易流程四)
// 點擊收取商品按鈕，將orderstate從4(收取商品)改成5(已完成訂單)
router.post('/memberPage/buyer/tradebuyercomplete/:orderid/OrderCompleteState', function (req, res, next) {
  var sqlsyn = 'UPDATE `order` SET `orderstate`=?, `ordereval`= ?,`orderevalcmmt`=? WHERE orderid=?';
  req.mysql.query(sqlsyn, [5, req.body.ordereval, req.body.orderevalcmmt, req.params.orderid], function (err, result) {
    res.send(JSON.stringify(result));
  })
});

// 會員中心頁面 => 申訴中交易
router.get('/memberPage/buyerInfo/tradeCancel/:userid', function (req, res, next) {
  var sqlsyn = 'SELECT o.orderid, p.producttitle, p.productprice FROM `order` o JOIN product p on p.productid = o.productid WHERE o.orderstate = 6 && o.buyerid = ?'
  req.mysql.query(sqlsyn, [req.params.userid], function (err, result) {
    res.send(JSON.stringify(result));
  })
});





// 賣家會員中心
// 會員中心頁面交易中商品
router.get('/memberPage/sellerInfo/tradeTransfer/:userid', function (req, res, next) {
  var sqlsyn = 'SELECT o.orderid, p.producttitle, o.orderprice FROM `order` o JOIN product p on p.productid = o.productid WHERE orderstate = 3 && p.vgtid = ?'
  req.mysql.query(sqlsyn, [req.params.userid], function (err, result) {
    res.send(JSON.stringify(result));
  })
});

// seller / dealertransfer
// 訂單詳細頁面(交易流程三)
router.get('/memberPage/seller/tradetransfer/:orderid', function (req, res) {
  var sqlsyn = 'SELECT p.producttitle, p.vgtid, p.gamelist, p.productclass, p.gameserver, o.buyerid, o.charactername, o.characterdesc FROM `order` o JOIN product p on p.productid = o.productid WHERE o.orderstate = 3 && o.orderid = ?';
  req.mysql.query(sqlsyn, [req.params.orderid], function (err, result) {
    res.send(JSON.stringify(result));
  })
});

// seller / dealertransfer 訂單頁面(交易流程三)
// 點擊收取商品按鈕，將orderstate從3(移交商品)改成4(收取商品)
router.post('/memberPage/seller/tradetransfer/:orderid/ordertransfer', function (req, res, next) {
  var sqlsyn = 'UPDATE `order` SET orderstate = ? where orderid = ?';
  req.mysql.query(sqlsyn, [4, req.params.orderid], function (err, result) {
    res.send(JSON.stringify(result));
  })
});

// seller / dealertransfer 訂單頁面(交易流程三) 
// 以orderid取得留言資料(ordercmmt)
router.get('/memberPage/seller/tradetransfer/:orderid/cmmt', function (req, res, next) {
  var sqlsyn = 'SELECT oc.cmmtid, oc.cmmtdesc, oc.cmmtdate FROM `order` o JOIN ordercmmt oc on oc.orderid = o.orderid WHERE o.orderid = ?'
  req.mysql.query(sqlsyn, [req.params.orderid], function (err, result) {
    res.send(JSON.stringify(result));
  })
});

// seller / dealertransfer 留言功能
// 根據訂單編號寫入留言資訊
router.post('/memberPage/seller/tradetransfer/insertcmmt', function (req, res) {
  var sqlsyn = 'INSERT INTO `ordercmmt`(`orderid`, `cmmtid`, `cmmtdesc`) VALUES (?, ?, ?)';
  req.mysql.query(sqlsyn, [req.body.orderid, req.body.cmmtid, req.body.insertcmmt], function (err, result) {
    res.send(JSON.stringify(result));
  })
})

// seller / dealerComplete
// 會員中心頁面 => 領收、評價商品(交易流程四)
router.get('/memberPage/sellerInfo/tradeComplete/:userid', function (req, res, next) {
  var sqlsyn = 'SELECT o.orderid, p.producttitle, o.orderprice FROM `order` o JOIN product p on p.productid = o.productid WHERE (o.orderstate = 4 OR o.orderstate = 5) && p.vgtid=?'
  req.mysql.query(sqlsyn, [req.params.userid], function (err, result) {
    res.send(JSON.stringify(result));
  })
});

// seller / dealertransfer
// 訂單詳細頁面(交易流程四)
router.get('/memberPage/seller/tradesellercomplete/:orderid', function (req, res) {
  var sqlsyn = 'SELECT p.producttitle, p.vgtid, p.gamelist, p.productclass, p.gameserver, o.buyerid, o.charactername, o.characterdesc FROM `order` o JOIN product p on p.productid = o.productid WHERE (o.orderstate = 4 OR o.orderstate = 5) && o.orderid = ?';
  req.mysql.query(sqlsyn, [req.params.orderid], function (err, result) {
    res.send(JSON.stringify(result));
  })
});


module.exports = router;

// date.format(new Date(), 'YYYY/MM/DD')