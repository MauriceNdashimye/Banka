import users from '../dummyDb/users';
import accounts from '../dummyDb/accounts'
import Account from '../models/account';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

class AccountController {
  //account creation
  static createAccount(req, res, next) {
    try {
      const testMemership = users.some(user => user.email === req.body.email);
      if (testMemership) {
        return res.status(409).json({
          message: "This user is not registered",
        });
      }
      for (var i = 0; i < users.length; i++) {
        if (users[i].email === req.body.email) {
          var user = users[i];
        };
      };
      const newAccount = new Account({
        _id: new mongoose.Types.ObjectId(),
        accountNumber: accounts.length + 1,
        createdOn: Date.now(),
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        type: 'active',
        openingBalance: req.body.openingBalance

        // _id : mongoose.Schema.Types.ObjectId,
        // accountNumber: Integer,
        // createdOn : DateTime,
        // owner : Integer, //user id
        // type : String , // savings, current
        // status : String, // draft, active, or dormant
        // balance : Float




      });
      accounts.push(newAccount)
      res.status(201).json({
        status: 201,
        data: {
          accountNumer: newAccount.accountNumber,
          firstName: newAccount.firstName,
          lastName: newAccount.lastName,
          email: newAccount.email,
          openingBalance: newAccount.openingBalance
        }
      });

    } catch (err) {
      res.status(500).json({
        error: err
      })
    }
  }



  //changing status
  static changeAccountStatus(req, res, next) {
    try {
      found = accounts.some(account => account._id.toString() === req.params.id);
      if (found) {
        for (var i = 0; i < accounts.length; i++) {
          if (accounts[i]._id.toString() === req.params.id) {
            for (const prop of req.body) {
              accounts[i][prop.propName] = prop.value;
            };
            updatedAcc = accounts[i]
          };
        };
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

  static accountDelete(req, res, next) {
    try {
      found = accounts.some(account => account._id.toString() === req.params.id);
      if (found) {
        for (var i = 0; i < accounts.length; i++) {
          var acc = accounts[i];
          if (acc._id.toString() === req.params.id) {
            accounts.splice(i, 1);
          };
          res.status(201).json({
            status: 201,
            message: 'account deleted successfully'
          });
        }
      } else {
        res.status(400).json({
          msg: `No user with id: ${req.params.id}`
        });
      };
    } catch (err) {
      res.status(500).json({
        error: err
      })
    }
  }

}
export default AccountController;