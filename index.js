const express = require('express');
const bodyParser = require('body-parser');
const connect = require('./db');
const user= require('./info_controller');
const detail= require('./detail_controller');

connect.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
    console.log('Connected to the MySQL server.');
  });



// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to express"});
});
//routes for user and booking
app.post('/userAdd',user.getAdd);  
app.get('/allUser',user.getAll);
app.post('/updateUser',user.getUpdate);
app.post('/deleteUser',user.getDelete);
app.post('/roomBook',detail.getAdd);
app.post('/detete_details',detail.getDelete);


// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});