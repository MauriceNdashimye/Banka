import users from '../dummyDb/users';
import User from '../models/user';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

class UserController {
  //user signup
  static userSignUp(req, res, next) {
    try {
      const testConflict = users.find(user => user.email === req.body.email);
      if (testConflict) {
        return res.status(409).json({
          message: "This email is already registered",
        });
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).json({
              error: err
            });
          } else {
            const newUser = new User({
              _id: new mongoose.Types.ObjectId(),
              firstName: req.body.firstName,
              lastName: req.body.lastName,
              email: req.body.email,
              phoneNumber: req.body.phoneNumber || 780000000,
              idNumber: req.body.idNumber || 123123123,
              password: hash,
              type: req.body.type || 'client or staff',
              isAdmin: req.body.isAdmin || false,
            });

            if (!newUser.firstName || !newUser.lastName || !newUser.email) {
              return res.status(400).json({
                msg: 'Please include first and last names and an email'
              });
            }
            users.push(newUser)
            res.status(201).json({
              status: 201,
              data: {
                token: newUser.password,
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                email: newUser.email
              }
            });
          }
        });
      }
    } catch (err) {
      res.status(500).json({
        error: err
      })
    }
  }

  // Get all users
  static getAllUsers(req, res) {
    try {
      return res.status(200).json({
        users
      });
    } catch (err) {
      res.status(500).json({
        error: err
      })
    }
  }
  // Get a single user
  static getSingleUser(req, res) {
    const findUser = users.find(user => user._id === parseInt(req.params.id, 10));
    if (findUser) {
      return res.status(200).json({
        user: findUser,
        message: "A single user record",
      });
    }
    return res.status(404).json({
      message: "User record not found",
    });
  }

  static deleteUser(req, res) {
    try {
      found = users.some(user => user._id.toString() === req.params.id);
      if (found) {
        for (var i = 0; i < users.length; i++) {
          var obj = users[i];
          if (obj._id.toString() === req.params.id) {
            users.splice(i, 1);
          };
          res.json(users);
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
export default UserController;