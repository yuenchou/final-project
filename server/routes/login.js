var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var saltRounds = 10;

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

// router.post("/login", (req, res, next) => {
//     const username = req.body.username;
//     const password = req.body.password;

//     req.mysql.query(
//         "SELECT * FROM member WHERE account = ?", [username],
//         (err, result) => {

//             if (err) {
//                 res.send({err: err});
//             } 
            
//             if (result.length > 0) {
//                 if (password === result[0].password ) {
//                     req.session.user = result;
//                     res.send(req.session.user);
//                     console.log(result)
//                 } else {
//                     console.log({ message: "Wrong account/password combination!" })
//                 }
//             } else {
//                 console.log({ message: "User doesn't exist"})
//             }
            
//         }
//     )

// })

// router.get("/login", (req,res, next) => {
//     // 如果失敗，把component重新連接試試看
//     if (req.session.user) {
//         console.log({ loggedIn: true, user: req.session.user });
//         res.send(req.session.user);
//     } else {
//         console.log({ loggedIn: false })
//     }
// })

router.post("/register", (req, res) => {
    const account = req.body.account
    const password = req.body.password
    const truename = req.body.truename
    const birthdate = req.body.birthdate
    const trueid = req.body.trueid
    const email = req.body.email
    const phone = req.body.phone
    bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err) {
            console.log(err);
        };
        const sqlSelect = "INSERT INTO member (vgtname,account,password,truename,birthdate,trueid,email,phone,auth,vgtpoint,vgtpassword,eval) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)";
        req.mysql.query(sqlSelect, [account, account, hash, truename, birthdate, trueid, email, phone, 1, 0, null, null],
        // db.query(sqlSelect, [account, account, hash, truename, birthdate, trueid, email, phone, 1, 0, hash, null],
            (err, result) => {
                console.log(err);
                res.send(result);
            })
    })

});

router.post("/login", (req, res, next) => {
    const account = req.body.account
    const password = req.body.password
    const sqlSelect = "SELECT * FROM member WHERE account =?;"
    req.mysql.query(sqlSelect, account,
        (err, result) => {
            if (err) {
                res.send({ err: err });
            }

            if (result.length > 0) {
                bcrypt.compare(password, result[0].password,
                    (error, response) => {
                        if (response) {
                            req.session.user = result;
                            console.log(req.session.user);
                            res.send(req.session.user);
                        } else {
                            res.send({ message: "Wrong account/password combination!" })
                        }
                    })
            } else {
                res.send({ message: "User doesn't exist" })
            };

        });

})

router.get("/login", (req,res, next) => {
    if (req.session.user) {
        console.log({ loggedIn: true, user: req.session.user });
        res.send(req.session.user);
    } else {
        console.log({ loggedIn: false })
    }
})

router.get('/logout', function (req, res) {
    res.clearCookie('vgtid');
    res.redirect('/FrontPage');

});



module.exports = router;