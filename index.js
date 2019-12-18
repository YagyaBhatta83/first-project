const express = require('express');
const bodyparser = require('body-parser');
const app = express();
var multer = require('multer');
var upload = multer({ dest: 'uploads/' })

const databaseConfig = require('./config/databaseConfig');
const userModel = require('./Models/UserModels');
const userController = require('./Controller/UserController');

app.use(bodyparser.urlencoded({
    extended: true
}));


app.post('/registration', userController.validator, userController.getHash, userController.checkIfUserExits, userController.register)
app.listen(3006);

app.post('/User', upload.single('images'), function(req, res, next) {
    console.log(req.file);
    console.log(req.body);

})