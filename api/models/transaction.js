import mongoose from 'mongoose';

const transactionModel = mongoose.Schema({
  transactionId: mongoose.Schema.Types.ObjectId,
  createdOn: String,
  type: String, // credit or debit
  accountNumber: String,
  cashier: Number, // cashier who consummated the transaction
  amount: String,
  transactionType: String,
  oldBalance: String,
  newBalance: String
});

module.exports = mongoose.model('Transaction', transactionModel)