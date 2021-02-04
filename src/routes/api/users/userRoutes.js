/*eslint-disable */
import express from 'express';
import validateUserData from '../../../middlewares/validators/UserValidator'; 
import UserController from '../../../controllers/User';
import passport from '../../../database/config/passportSetup'; 
import Social from '../../../controllers/socialAuth';
import { UserAuthentication } from '../../../middlewares/auth';
import {upload} from '../../../helpers/multer';

const router = express.Router();
<<<<<<< HEAD
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

=======
router.post('/signup', validateUserData.createUser, validateUserData.verifyIfEmailisAvailable ,UserController.signUp);
router.post('/signin', validateUserData.validateUserSigninData, validateUserData.verifySignin, UserController.signIn)
router.get('/verifyEmail/:token', validateUserData.verificationValidation ,UserController.accountVerification);
router.get('/auth/google/callback', passport.authenticate('google'), Social.Oauth);
router.get('/oauth/google', passport.authenticate('google', {scope: ['profile', 'email']}));
router.get('/oauth/facebook/', passport.authenticate('facebook', {scope: ['public_profile', 'email']}));
router.get('/facebook/callback', passport.authenticate('facebook'), Social.Oauth);
router.get('/logout/:token', validateUserData.logOutVerification, UserController.logOut);
>>>>>>> 2e9c960 (FT-LOGOUT)
export default router;

