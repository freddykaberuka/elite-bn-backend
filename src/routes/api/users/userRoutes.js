/*eslint-disable */
import express from 'express';
import validateUserData from '../../../middlewares/validators/UserValidator'; 
import UserController from '../../../controllers/user';
import passport from '../../../database/config/passportSetup'; 
import Social from '../../../controllers/socialAuth';

const router = express.Router();
router
      .post('/signup', validateUserData.createUser, validateUserData.verifyIfEmailisAvailable ,UserController.signUp)
      .post('/signin', validateUserData.validateUserSigninData, validateUserData.verifySignin, UserController.signIn)
      .post('/forgotPassword', validateUserData.verifyEmail, UserController.forgetpassword)
      .put('/resetpassword/:newToken', UserController.resetpassword)
      .get('/verifyEmail/:token', validateUserData.verificationValidation ,UserController.accountVerification)
      .get('/auth/google/callback', passport.authenticate('google'), Social.Oauth)
      .get('/oauth/google', passport.authenticate('google', {scope: ['profile', 'email']}))
      .get('/oauth/facebook/', passport.authenticate('facebook', {scope: ['public_profile', 'email']}))
      .get('/facebook/callback', passport.authenticate('facebook'), Social.Oauth);
export default router;

