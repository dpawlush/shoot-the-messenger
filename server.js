// server.js to configure and start simple node server


// required libraries
var http = require('http');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// initialize express app
var router = express();

// configure the router to use bodyParser() for services json parsing
router.use(bodyParser.urlencoded({
    extended: true
}));
router.use(bodyParser.json());

// include files with services
var loginEndpoint = require(__dirname + '/server/rest/loginEndpoint')(router);


// server home angular page -> index.html
// unnecessary now? maybe
router.get('/', function(req, res) { res.sendfile(path.join(__dirname + '/client/index.html'));});

// serve up entire client directory
router.use(express.static('client'));
var server = http.createServer(router);


// start server
server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Server homepage at", addr.address + ":" + addr.port);
});