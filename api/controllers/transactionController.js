import mongoose from 'mongoose';
import Transaction from '../models/transaction';
import accounts from '../dummyDb/accounts';
import users from '../dummyDb/users';

const transactions = [];
class TransactionController {
  // debit an account
  static debitAccount(req, res, next) {
    try {
      const cashier = users.find(user => user._id.toString() === req.body.cashier.toString());
      if (!cashier || cashier.type !== 'staff') {
        return res.status(401).json({
          msg: 'Access denied!',
        });
      }
      const found = accounts.find(account => account._id.toString() === req.params.accountNumber.toString());
      if (!found) {
        return res.status(400).json({
          msg: 'This bank account doesn\'t exist',
        });
      }

      if (found.balance < parseFloat(req.body.amount)) {
        return res.status(400).json({
          status: 400,
          msg: 'Insufficient funds.',
        });
      }
      const oldBalance = found.balance;
      found.balance = (parseFloat(found.balance) - parseFloat(req.body.amount)).toString();
      const transData = new Transaction({
        transactionId: new mongoose.Types.ObjectId(),
        createdOn: Date.now(),
        accountNumber: found.accountNumber,
        amount: found.amount,
        cashier: req.body.cashier,
        transactionType: 'Debit',
        oldBalance,
        newBalance: found.balance,
      });
      transactions.push(transData);
      return res.status(201).json({
        status: 201,
        status: 201,
        data:{
          transactionId: transData.transactionId,
          accountNumber: transData.account,
          amount: transData.amount,
          cashier: transData.cashier, // cashier that consumated the transaction
          transactionType: transData.transactionType,
          accountBalance: transData.newBalance,
        }
      });
    } catch (err) {
      res.status(500).json({
        error: err,
      });
    }
  };

  // credit an account
  static creditAccount(req, res, next) {
    try {
      const cashier = users.find(user => user._id.toString() === req.body.cashier.toString());
      if (!cashier || cashier.type !== 'staff') {
        return res.status(401).json({
          msg: 'Access denied!',
        });
      }
      const found = accounts.find(account => account._id.toString() === req.params.accountNumber.toString());
      if (!found) {
        return res.status(400).json({
          msg: 'This bank account doesn\'t exist',
        });
      }

      const oldBalance = found.balance;
      found.balance = (parseFloat(found.balance) + parseFloat(req.body.amount)).toString();
      const transData = new Transaction({
        transactionId: new mongoose.Types.ObjectId(),
        createdOn: Date.now(),
        accountNumber: found.accountNumber,
        amount: found.amount,
        cashier: req.body.cashier,
        transactionType: 'Debit',
        oldBalance,
        newBalance: found.balance,
      });
      transactions.push(transData);
      return res.status(201).json({
        status: 201,
        data: {
          transactionId: transData.transactionId,
          accountNumber: transData.account,
          amount: transData.amount,
          cashier: transData.cashier, // cashier that consumated the transaction
          transactionType: transData.transactionType,
          accountBalance: transData.newBalance,
        }
      });
    } catch (err) {
      res.status(500).json({
        error: err,
      });
    }
  };
}
export default TransactionController;
