/*eslint-disable */
import express from 'express';
import validateUserData from '../../../middlewares/validators/UserValidator';
import UserController from '../../../controllers/user';


const router = express.Router();

router.post('/signup', validateUserData.createUser, validateUserData.verifyIfEmailisAvailable ,UserController.signUp);
router.get('/verifyEmail/:token', validateUserData.verificationValidation ,UserController.accountVerification);

export default router;

