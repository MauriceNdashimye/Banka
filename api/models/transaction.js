import mongoose from 'mongoose';

const transactionModel = mongoose.Schema({
  createdOn : DateTime ,
  type : String , // credit or debit
  accountNumber : Integer ,
  cashier : Integer , // cashier who consummated the transaction
  amount : Float ,
  oldBalance : Float ,
  newBalance : Float 
});

module.exports = mongoose.model('Transaction', transactionModel)