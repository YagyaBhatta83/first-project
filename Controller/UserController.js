const bcrypt = require('bcrypt');
var User = require('../Models/UserModels');

function validator(req, res, next) {
    if (req.body.username === '') {
        res.json({ status: 404, message: 'username is required' })
    } else if (req.body.password === '') {
        res.json({ status: 404, message: 'password is required' })
    } else {
        next();

    }

}


function getHash(req, res, next) {
    const saltRound = 10;
    const myPlaintextPassword = req.body.password;
    bcrypt.hash(myPlaintextPassword, saltRound, function(err, hash) {
        if (hash) {
            req.hashkey = hash;
            next();
        }
        if (err) {
            res.json({ status: 5000, message: 'could not found request' })
        }
    });
}

function checkIfUserExits(req, res, next) {
    //db -> username already exist

    User.findOne({
            where: { username: req.body.username }
        })
        .then(function(result) {
            if (result === null) {
                next();
            } else {
                console.log('User Already Exits');
                res.json({ status: 5000, message: 'User Already Exits' })
            }

        })
        .catch(function(err) {
            console.log(err);
            res.json(err);
        })

}

function register(req, res, next) {
    User.create({
            username: req.body.username,
            password: req.hashkey
        })
        .then(function(result) {
            console.log(result);
            res.json(result);
        })
        .catch(function(err) {
            console.log(err);
            res.json(err);
        })

}
module.exports = {
    validator,
    getHash,
    register,
    checkIfUserExits
}