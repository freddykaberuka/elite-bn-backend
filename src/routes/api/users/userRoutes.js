/*eslint-disable */
import express from 'express';
import validateUserData from '../../../middlewares/validators/UserValidator'; 
import UserController from '../../../controllers/user';
import passport from '../../../database/config/passportSetup'; 
import Social from '../../../controllers/socialAuth';
import { UserAuthentication } from '../../../middlewares/auth';
import {upload} from '../../../helpers/multer';

const router = express.Router();
router.post('/signup', validateUserData.createUser, validateUserData.verifyIfEmailisAvailable ,UserController.signUp);
router.post('/signin', validateUserData.validateUserSigninData, validateUserData.verifySignin, UserController.signIn)
router.get('/verifyEmail/:token', validateUserData.verificationValidation ,UserController.accountVerification);
router.get('/auth/google/callback', passport.authenticate('google'), Social.Oauth);
router.get('/oauth/google', passport.authenticate('google', {scope: ['profile', 'email']}));
router.get('/oauth/facebook/', passport.authenticate('facebook', {scope: ['public_profile', 'email']}));
router.get('/facebook/callback', passport.authenticate('facebook'), Social.Oauth);
router.patch('/updateProfile',upload.single('profilePicture'), UserAuthentication, UserController.updateProfile);
router.get('/profile/:id', UserAuthentication, UserController.getProfile);
export default router;

