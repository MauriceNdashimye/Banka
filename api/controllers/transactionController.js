import users from '../dummyDb/transactions';
import User from '../models/transaction';
import accounts from '../dummyDb/accounts'
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

class transactionController {
//debit an account
static debitAccount(req, res, next) {
  try {
    found = accounts.some(account => account._id.toString() === req.params.id);
    if (found) {
      for (var i = 0; i < accounts.length; i++) {
        var updatedAcc = accounts[i];
        if (updatedAcc._id.toString() === req.params.id) {
          for (const prop of req.body) {
            up;
          };
        };
      };
      accounts.push(updatedAcc);
      res.status(201).json({
        status: 201,
        data: {
          accountNumer: updatedAcc.accountNumber,
          status: updatedAcc.status,
        }
      });
    } else {
      res.status(400).json({
        msg: `No account with id: ${req.params.id}`
      });
    };
  } catch (err) {
    res.status(500).json({
      error: err
    })
  }
}

//credit an account
static creditAccount(req, res, next) {
  try {
    found = accounts.some(account => account._id.toString() === req.params.id);
    if (found) {
      for (var i = 0; i < accounts.length; i++) {
        var updatedAcc = accounts[i];
        if (updatedAcc._id.toString() === req.params.id) {
          for (const prop of req.body) {
            updatedAcc[prop.propName] = prop.value;
          };
        };
      };
      accounts.push(updatedAcc);
      res.status(201).json({
        status: 201,
        data: {
          accountNumer: updatedAcc.accountNumber,
          status: updatedAcc.status,
        }
      });
    } else {
      res.status(400).json({
        msg: `No account with id: ${req.params.id}`
      });
    };
  } catch (err) {
    res.status(500).json({
      error: err
    })
  }
}
}
export default TransaController;



