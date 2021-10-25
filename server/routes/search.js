var express = require('express');
var router = express.Router();
var fs = require("fs");

var conditionName = "./condition.json";
var dataName = "./data.json";

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/search', (req, res, next) => {
    var data = fs.readFileSync(dataName);
    var dataList = JSON.parse(data);
    res.send(dataList);
});

router.post("/condition", (req, res, next) => {

    var gamelist = (req.body.gamelist === "") ? "" : `WHERE gamelist = '${req.body.gamelist}'`;
    var gameserver = (req.body.gameserver === "") ? "" : `AND gameserver = '${req.body.gameserver}'`;
    var productclass = (req.body.productclass === "") ? "" : `AND productclass = '${req.body.productclass}'`;
    var keyWord = (req.body.keyWord === "") ? "" : `AND producttitle LIKE '%${req.body.keyWord}%'`;
    var condition = `${gamelist} ${gameserver} ${productclass} ${keyWord}`;
    var newsList = [{"condition": condition}]
    fs.writeFileSync("./condition.json", JSON.stringify(newsList));  

    
    const sqlSelect = `SELECT * FROM product ${condition} ORDER BY productdate DESC`;
    req.mysql.query(sqlSelect, (err, result, next) => {
        fs.writeFileSync("./data.json", JSON.stringify(result)); 
        res.send(result);   

    })
    

});

router.post("/filter", (req, res, next) => {

    var priceRange1 = req.body.priceRange1;
    var priceRange2 = req.body.priceRange2;
    var datefilter1 = req.body.datefilter1;
    var datefilter2 = req.body.datefilter2;

    var data = fs.readFileSync(conditionName);
    var newsList = JSON.parse(data);
    if (priceRange1 && priceRange2 && datefilter1 && datefilter2) {
        newsList[0].condition += `AND productprice BETWEEN ${priceRange1} AND ${priceRange2} AND productdate BETWEEN '${datefilter1}' AND '${datefilter2}'`
    } else if ( priceRange1 && priceRange2 ) {
        newsList[0].condition += `AND productprice BETWEEN ${priceRange1} AND ${priceRange2}`
    } else if ( datefilter1 && datefilter2 ) {
        newsList[0].condition += `AND productdate BETWEEN '${datefilter1}' AND '${datefilter2}'`
    }
    console.log(newsList);
    const sqlSelect = `SELECT * FROM product ${newsList[0].condition} ORDER BY productdate DESC`;
    req.mysql.query(sqlSelect, (err, result) => {
        res.send(result);    
        fs.writeFileSync("./data.json", JSON.stringify(result));  
    })
});


module.exports = router;