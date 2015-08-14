var mongoose = require('mongoose');

//Define MongoDB schema for users
var userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    index: true
  },
  username: {
    type: String,
    unique: true,
    required: true,
    index: true
  },
  password: {
    type: String,
    unique: true,
    required: true,
  }
});

//Name database and collection
module.exports = mongoose.model('User', userSchema);
