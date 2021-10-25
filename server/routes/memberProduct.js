var express = require('express');
var router = express.Router();
var date = require('date-and-time');

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.post("/newProduct", async (req, res, next) => {
    const productimg = req.body.productimg;
    const sqlSelect = "INSERT INTO product (vgtid, gamelist, gameserver, producttitle, productclass, productdesc, productprice, productquant, productimg, producttoorder) VALUES (?,?,?,?,?,?,?,?,?,?)";
    req.mysql.query(sqlSelect, [req.body.vgtid, req.body.gamelist, req.body.gameserver, req.body.producttitle, req.body.productclass, req.body.productdesc, req.body.productprice, req.body.productquant, `${productimg}`, 1], (err, result) => {
        console.log(err);
        res.send(result);
    })
});

// router.post("/newProduct", async (req, res, next) => {
//     const vgtid = req.body.vgtid;
//     const gamelist = req.body.gamelist;
//     const gameserver = req.body.gameserver;
//     const producttitle = req.body.producttitle;
//     const productclass = req.body.productclass;
//     const productdesc = req.body.productdesc;
//     const productprice = req.body.productprice;
//     const productquant = req.body.productquant;
//     const productimg = req.body.productimg;
//     // const productdate = date.format(new Date(), 'YYYY/MM/DD HH:mm:ss');
//     const sqlSelect = "INSERT INTO product (vgtid, gamelist, gameserver, producttitle, productclass, productdesc, productprice, productquant, productimg, producttoorder) VALUES (?,?,?,?,?,?,?,?,?,?)";
//     req.mysql.query(sqlSelect, [vgtid, gamelist, gameserver, producttitle, productclass, productdesc, productprice, productquant, `${productimg}`, 1], (err, result) => {
//         console.log(err);
//         res.send(result);
//     })
// });

router.get('/productList/:id', function(req, res, next) {
    const sqlSelect = "SELECT * FROM product WHERE vgtid = ?"
    req.mysql.query(sqlSelect, [req.params.id], (err, result) => {
        console.log(err);
        res.send(result);
    })
});

router.put('/editProduct', function(req, res, next) {
    const productdate = date.format(new Date(), 'YYYY/MM/DD HH:mm:ss');
    const sqlSelect = "UPDATE product SET gamelist = ?, gameserver = ?, producttitle = ?, productclass = ?, productdesc = ?, productprice = ?, productquant = ?, productdate = ? WHERE productid = ?"
    req.mysql.query(
        sqlSelect, 
        [req.body.gamelist, req.body.gameserver, req.body.producttitle, req.body.productclass, req.body.productdesc, req.body.productprice, req.body.productquant, productdate, req.body.productid], 
        (err, result) => {
            console.log(err);
            res.send(result)
        }
    )
})

router.delete('/deleteProduct/:id', function(req, res, next) {
    const id = parseInt(req.params.id)
    const sqlSelect = "DELETE FROM product WHERE productid = ?"
    req.mysql.query(sqlSelect, [id], (err, result) => {
        console.log(err);
        res.send(result);
    })
});

module.exports = router;