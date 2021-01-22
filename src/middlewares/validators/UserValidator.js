/*eslint-disable */
import SignUpValidationSchema from '../../helpers/validateSchemas/SignupValidationSchema';
import Util from '../../helpers/utils';
import userSchema from '../../models/user';
import userServices from '../../services/userService';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const util = new Util();

class UserValidator {
    static createUser = (req, res, next) => {
        const {
            error
        } = SignUpValidationSchema.validate(req.body);
        if (error) {
            util.setError(400, error);
            return util.send(res);
        }
        next();

    }
    static verifyIfEmailisAvailable = async (req, res, next) => {
        const emailUser = await userServices.findByProp({
            email: req.body.email
        });
        if (emailUser[0]) {
            util.setError(409, 'Email in use');
            return util.send(res);
        }
        next();
    }
    static verificationValidation = async (req, res, next) => {
        try {
            const {
                token
            } = req.params;
            const decodeToken = jwt.verify(token, process.env.PRIVATE_KEY);
            const getUser = await userServices.findByProp({
                email: decodeToken.email
            });

            if (getUser[0].dataValues.isVerified === true) {
                const Error = 'This Account is already verified';
                util.setError(409, Error);
                return util.send(res);
            }
            next();
        } catch (error) {
            const Error = 'The token has expired';
            util.setError(410, Error);
            return util.send(res);
        }
        }
    }

    export default UserValidator;