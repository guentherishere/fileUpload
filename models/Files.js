var mongoose = require('mongoose');

//Define MongoDB schema for users
var fileSchema = new mongoose.Schema({
  originalname: {
    type: String,
    unique: true,
    required: true,
    index: true
  },
  type: {
    type: String,
    unique: true,
    required: true,
  },
  path: {
    type: String,
    unique: true,
    required: true,
  }
});

//Name database and collection
module.exports = mongoose.model('File', fileSchema);
