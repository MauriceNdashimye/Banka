import users from '../dummyDb/users';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class AuthController {
  //login authetication
  static authSignIn(req, res, next){
    try{
      const findUser = users.some(user => user.email === req.body.email.toString());
      if(!findUser){
        return res.status(401).json({
          message: 'Authentication failed'
        }); 
      }
      for (var i = 0; i < users.length; i++) {
        if ( users[i].email === req.body.email) {
            var user = users[i];
        };
      };
      bcrypt.compare(req.body.password, user.password, (err, result) =>{
        if (err){
          return res.status(401).json({
            message: 'Authentication failed'
          });  
        }
        if (result){
          const token = jwt.sign({
            email: user.email,
            userId: user._id,
          }, 
          "process.env.JWT_KEY",
          {
            expiresIn: "1h"
          }
          );
          return res.status(200).json({
            status: 200,
            data: {
            token: token,
            id: user._id, // user id
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email
            }
          }); 
        }
        return res.status(401).json({
          message: 'Authentication failed'
        });  
      });
    }
    catch(err){
      res.status(500).json({
        error: err
      })
    }
  }  
}
export default AuthController;