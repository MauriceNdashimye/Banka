import mongoose from 'mongoose';

const accountModel = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  email: String,
  phoneNumber: Number,
  idNumber: Number,
  firstName: { type:String },
  lastName: String,
  password: String,
  type: String, 
  isAdmin: Boolean,
});

module.exports = mongoose.model('Account', accountModel)