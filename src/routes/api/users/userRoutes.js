/*eslint-disable */
import express from 'express';
import validateUserData from '../../../middlewares/validators/UserValidator'; 
import UserController from '../../../controllers/User';
import passport from '../../../database/config/passportSetup'; 
import Social from '../../../controllers/socialAuth';
import { UserAuthentication } from '../../../middlewares/auth';
import {upload} from '../../../helpers/multer';
import authorize from '../../../middlewares/userAuthorization';

const router = express.Router();

router.post('/signup', validateUserData.createUser, validateUserData.verifyIfEmailisAvailable ,UserController.signUp);
router.post('/signin', validateUserData.validateUserSigninData, validateUserData.verifySignin, UserController.signIn);
router.get('/verifyEmail/:token', validateUserData.verificationValidation ,UserController.accountVerification);
router.get('/auth/google/callback', passport.authenticate('google'), Social.Oauth);
router.get('/oauth/google', passport.authenticate('google', {scope: ['profile', 'email']}));
router.get('/oauth/facebook/', passport.authenticate('facebook', {scope: ['public_profile', 'email']}));
router.get('/facebook/callback', passport.authenticate('facebook'), Social.Oauth);
router.get('/profile/:id', UserAuthentication, UserController.getProfile);
router.patch('/updateProfile',upload.single('profilePicture'), UserAuthentication, UserController.updateProfile);
router.get('/logout/', validateUserData.logOutVerification, UserController.logOut);
router.patch('/updateRole/:id', authorize.userAuthorize, UserController.changeRole);
router.delete('/delete/:id', authorize.userAuthorize, UserController.deleteUser);
router.post('/forgotPassword', validateUserData.verifyEmail, UserController.forgetPassword);
router.put('/resetpassword/:newToken', validateUserData.validateResetPasswordData, UserController.resetPassword);
router.put('/assign/manager', validateUserData.assignManager, authorize.userAuthorize, UserController.assignUsers);
router.get('/getUser', authorize.userAuthorize,UserController.viewUsersManager);
 
export default router;

// https://elite-staging.herokuapp.com/api/v1/users/auth/google/callback