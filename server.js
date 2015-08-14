//Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');

//Controllers
var User = require('./controllers/UserCtrl');

//Express
var app = express();

//Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/public'));

// Endpoints
app.post('/user', User.create);
app.get('/user', User.read);
app.put('/user/:id', User.update);
app.delete('/user/:id', User.delete);

//API connection
var port = 1337;
var mongoUri = 'mongodb://localhost:27017/fileUpload';

mongoose.set('debug', true);
mongoose.connect(mongoUri);
mongoose.connection.once('open', function () {
  console.log('connected to mongoDB at: ', mongoUri);
});

app.listen(port, function () {
  console.log("Communication sequence initiated...");
  console.log("Standby...");
  console.log("Link Established...");
  console.log("Launching communication port listener on " + port);
  console.log("Listener successfully launched!!!");
  console.log("listening on port " + port);
});
