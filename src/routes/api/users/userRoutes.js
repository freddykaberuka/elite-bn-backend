/*eslint-disable */
import express from 'express';
import validateUserData from '../../../middlewares/validators/UserValidator'; 
import UserController from '../../../controllers/User';
import passport from '../../../database/config/passportSetup'; 
import Social from '../../../controllers/socialAuth';
import { UserAuthentication } from '../../../middlewares/auth';
import {upload} from '../../../helpers/multer';

const router = express.Router();
router
 .post('/signup', validateUserData.createUser, validateUserData.verifyIfEmailisAvailable ,UserController.signUp)
 .post('/signin', validateUserData.validateUserSigninData, validateUserData.verifySignin, UserController.signIn)
 .get('/verifyEmail/:token', validateUserData.verificationValidation ,UserController.accountVerification)
 .get('/auth/google/callback', passport.authenticate('google'), Social.Oauth)
 .get('/oauth/google', passport.authenticate('google', {scope: ['profile', 'email']}))
 .get('/oauth/facebook/', passport.authenticate('facebook', {scope: ['public_profile', 'email']}))
 .get('/facebook/callback', passport.authenticate('facebook'), Social.Oauth)
 .get('/profile/:id', UserAuthentication, UserController.getProfile)
 .patch('/updateProfile',upload.single('profilePicture'), UserAuthentication, UserController.updateProfile)
 .get('/logout/', validateUserData.logOutVerification, UserController.logOut);

export default router;

