//Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var multer = require('multer');

//Controllers
var User = require('./controllers/UserCtrl');
var File = require('./controllers/FileCtrl');

//Express
var app = express();
var done = false;

//Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/public'));
//Multer configuration for file uploads
app.use(multer({
  dest: './uploads/',
  rename: function (fieldname, filename) {
    return filename + Date.now();
  },
  onFileUploadStart: function (file) {
    console.log(file.originalname + ' is starting ...');
  },
  onFileUploadComplete: function (file) {
    //Write file information to separate collection
    mongoose.model('File').create({
    originalname : file.originalname,
    type : file.extension,
    path : file.path
});
    console.log(file.fieldname + ' uploaded to  ' + file.path);
    done = true;
  }
}));

// Endpoints
app.post('/api/user', User.create);
app.get('/api/user', User.read);
app.put('/api/user/:id', User.update);
app.delete('/api/user/:id', User.delete);

app.get('/', function (req, res) {
  res.sendfile("index.html");
});

app.post('/api/fileStore', function (req, res) {
      if (done === true) {
          console.log(req.files); res.end("File uploaded.");
        }
      });

    //API connection
    var port = 1337;
    var mongoUri = 'mongodb://localhost:27017/fileUpload';

    mongoose.set('debug', true); mongoose.connect(mongoUri); mongoose.connection.once('open', function () {
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
