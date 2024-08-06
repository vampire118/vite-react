const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  birthday: { type: Date },
  address: { type: String },
  position: { type: String },
  education: { type: String },
  bio: { type: String }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
