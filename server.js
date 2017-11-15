// Dependencies--------------------------------------------------------
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');


// Data file REPLACE WITH MYSQL DATABASE ONCE IT'S COMPLETE------------
var friends = require('./app/friends.js');

// Body Parser & Express setup-----------------------------------------
var app = express();
var port = process.env.PORT || 8080;

app.use(express.static('./app/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// Routes--------------------------------------------------------------
require('./app/apiRoutes.js')(app);
require('./app/htmlRoutes.js')(app);

// Listen--------------------------------------------------------------
app.listen(port);
console.log("You are connected to port: " + port);
