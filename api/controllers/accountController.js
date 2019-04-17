import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import users from '../dummyDb/users';
import accounts from '../dummyDb/accounts';
import Account from '../models/account';

class AccountController {
  // account creation
  static createAccount(req, res, next) {
    try {
      const testMembership = users.some(user => user._id === req.body.id);
      if (!testMembership) {
        return res.status(409).json({
          message: 'This user is not registered',
        });
      }
      for (let i = 0; i < users.length; i++) {
        if (users[i]._id === req.body.id) {
          var user = users[i];
        }
      }
      const newAccount = new Account({
        _id: mongoose.Schema.Types.ObjectId,
        accountNumber: accounts.length + 1,
        createdOn: Date.now,
        owner: user._id,
        type: req.body.type,
        status: 'active',
        balance: 0,
      });
      accounts.push(newAccount);
      res.status(201).json({
        status: 201,
        data: {
          accountNumber: newAccount.accountNumber,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          openingBalance: newAccount.balance,
        },
      });

    } catch (err) {
      res.status(500).json({
        error: err,
      });
    }
  }

  // changing status
  static changeAccountStatus(req, res, next) {
    try {
      const found = accounts.find(account => account._id.toString() === req.params.id);
      if (found) {
        found.status = req.body.status;
        res.status(200).json({
          status: 200,
          data: {
            accountNumber: found.accountNumber,
            accountStatus: found.status,
          },
        });
      } else {
        res.status(400).json({
          msg: `No account with id: ${req.params.id}`,
        });
      }
    } catch (err) {
      res.status(500).json({
        error: err,
      });
    }
  }

  static accountDelete(req, res, next) {
    try {
      const found = accounts.find(account => account._id.toString() === req.params.id);

      if (found) {
        accounts.splice(accounts.indexOf(found), 1);
        res.status(200).json({
          status: 200,
          message: 'Account deleted successfully',
        });
      } else {
        res.status(400).json({
          msg: `No user with id: ${req.params.id}`,
        });
      }
    } catch (err) {
      res.status(500).json({
        error: err,
      });
    }
  }
}
export default AccountController;
