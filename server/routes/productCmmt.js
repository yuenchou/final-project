var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get("/productcmmt/:id", (req, res, next) => {
    // const sqlSelect = "SELECT member.vgtname, productcmmt.* FROM member RIGHT JOIN productcmmt ON member.vgtid = productcmmt.vgtid WHERE productid = ? ORDER BY cmmtdate DESC";
    const sqlSelect = "SELECT productcmmt.*, member.vgtname,productcmmtreply.replydesc FROM productcmmt RIGHT JOIN member ON member.vgtid = productcmmt.vgtid LEFT JOIN productcmmtreply ON productcmmt.cmmtid = productcmmtreply.cmmtid WHERE productcmmt.productid = ? ORDER BY cmmtdate DESC";
    req.mysql.query(sqlSelect, [req.params.id], (err, result) => {
        console.log(err);
        res.send(result);
    })
})

router.post("/productcmmt", (req, res, next) => {
    const productid = req.body.productid;
    const vgtid = req.body.vgtid
    const cmmtdesc = req.body.cmmtdesc;
    // const cmmtdate = date.format(new Date(), 'YYYY/MM/DD HH:mm:ss');
    const sqlSelect = "INSERT INTO productcmmt (productid, vgtid, cmmtauth , cmmtdesc) VALUES (?, ?, ?, ?)"
    req.mysql.query(sqlSelect, [productid, vgtid, 1, cmmtdesc], (err, result) => {
        console.log(err);
        console.log(result);
    })
})

router.get("/productcmmtreply/:id", (req, res, next) => {
    const sqlSelect = "SELECT * FROM productcmmtreply WHERE productid = ?";
    req.mysql.query(sqlSelect, [req.params.id], (err, result) => {
        console.log(err);
        res.send(result);
    })
})

router.post("/productcmmtreply", (req, res, next) => {
    const cmmtid = req.body.cmmtid;
    const productid = req.body.productid;
    const vgtid = req.body.vgtid
    const replydesc = req.body.replydesc;
    // const cmmtdate = date.format(new Date(), 'YYYY/MM/DD HH:mm:ss');
    const sqlSelect = "INSERT INTO productcmmtreply (cmmtid, productid, vgtid, replydesc) VALUES (?, ?, ?, ?)"
    req.mysql.query(sqlSelect, [cmmtid, productid, vgtid, replydesc], (err, result) => {
        console.log(err);
        console.log(result);
    })
})

router.put("/productcmmtreply", (req, res, next) => {
    const cmmtid = req.body.cmmtid;
    const replydesc = req.body.replydesc;
    const sqlSelect = "UPDATE productcmmtreply SET replydesc = ? WHERE cmmtid = ?"
    req.mysql.query(sqlSelect, [replydesc, cmmtid], (err, result) => {
        console.log(err);
        console.log(result);
    })
})


module.exports = router;