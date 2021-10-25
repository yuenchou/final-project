var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get("/detail/:id", (req, res, next) => {
    
    // const sqlSelect = "SELECT * FROM product WHERE productid = ?";
    const sqlSelect = `SELECT member.vgtname, product.* FROM member RIGHT JOIN product ON member.vgtid = product.vgtid WHERE product.productid = ?`;
    req.mysql.query(sqlSelect, [req.params.id], (err, result) => {
        res.send(result);
    })
});


module.exports = router;