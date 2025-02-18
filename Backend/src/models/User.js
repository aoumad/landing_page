const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  // Add other fields as needed for your user schema
});

module.exports = mongoose.model('User', userSchema);