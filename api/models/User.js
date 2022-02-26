const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, 'Please add a name'],
  },
  lastname: {
    type: String,
    required: [true, 'Please add a last name'],
  },
  address: {
    type: String,
    required: [true, 'Please add an address']
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});


module.exports = mongoose.model('User', UserSchema);