import Util from '../helpers/utils';
import userServices from '../services/userService';
import PasswordManip from '../services/passwordManipService';
import  sendEmail  from '../services/emailService';
import emailTemplate from '../services/template/sendEmail';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const util = new Util();

class User {
    static signUp = async (req, res) => {
        const {email, firstName, password, lastName}  = req.body; 
        const newUser = {
            email,
            password: PasswordManip.hashPassword(password),
            firstName,
            lastName
        };
        
        const createdUser = await userServices.createuser(newUser);
        const createdUserDetails = createdUser.dataValues;

        const token = jwt.sign({id: createdUserDetails.id, email: createdUserDetails.email}, process.env.PRIVATE_KEY, {expiresIn: '7d'});
        const subject = 'Verify email for Barefoot Nomad';

        sendEmail(emailTemplate(token, createdUserDetails.firstName), subject, email);
        const message = `Dear ${createdUserDetails.firstName} , A verification email has been sent to you email please go and confirm that email.`;
        const data = {
          id: createdUserDetails.id,
          email: createdUserDetails.email,
          role: createdUserDetails.role,
        };
        util.setSuccess(201, message, data);
        return util.send(res);
       
       
    }

    static accountVerification = async (req, res) => {
     try{
        const {
            token
        } = req.params;
        const decodeToken = jwt.verify(token, process.env.PRIVATE_KEY);
        await userServices.updateAtt({isVerified: true}, {email: decodeToken.email});
        const message = 'Account was succesfully verified';
        util.setSuccess(200, message);
        return util.send(res);
     }catch(error){
         util.setError(410, error);
         return util.send(res);
     }

        }
    }

module.exports = User;
