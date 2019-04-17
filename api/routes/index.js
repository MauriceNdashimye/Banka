import { Router } from 'express';
import UserController from '../controllers/userController';
import AuthController from '../controllers/authController';
import AccountController from '../controllers/accountController';
import TransactionController from '../controllers/transactionController';

const routes = Router();

//user routes

routes.get('/users/', UserController.getAllUsers);
routes.get('/users/:id', UserController.getSingleUser);
routes.post('/users/signup/', UserController.userSignUp);
routes.post('/auth/signin/', AuthController.authSignIn);
routes.delete('/users/:id', UserController.deleteUser);

//accounts routes

routes.post('/accounts/', AccountController.createAccount);
routes.patch('/account/:id', AccountController.changeAccountStatus);
routes.delete('/accounts/:id', AccountController.accountDelete);

//transactions routes

routes.post('/transactions/:accountNumber/credit', TransactionController.creditAccount);
routes.post('/transactions/:accountNumber/debit', TransactionController.debitAccount);
export default routes;