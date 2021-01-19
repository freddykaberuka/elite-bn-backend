const UserModel = require('../models/user');
const SignUpValidator = require('../middlewares/validators/SignUpValidator');
const user = require('../models/user');
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const jwtDecode = require('jwt-decode');

class User {
    static signUp = async (request, response) => {
        //Validation of data
        // (async () => {
            const valid = await SignUpValidator.validate(request.body);
            if (valid !== true) {
                return response.status(400).send({
                    message: "Bad Request",
                    valid
                })
            }
        // })();

        //Valid User
        const vUser = request.body;
        vUser.active = "FALSE";
        const userToken = jwt.sign(vUser, process.env.PRIVATE_KEY);

        //Check if the email is already in the database
        const k = await this.verifyIfEmailisAvailable(vUser);
        if (k == false) {
            return response.status(409).send({
                message: 'Email is already in the database'
            });
        }


        //Save the user with an active false argument
        try {
            await user.create(request.body);
        } catch (error) {
            response.status(400).send({
                message: "Am error occured",
                error
            })
        }


        //Send the email to the email
        let startLink = 'http://localhost:3000/auth/signup/verify/'+userToken;
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.PARENT_EMAIL,
                pass: process.env.PARENT_PASSWORD
            }
        });

        let mailOptions = {
            from: process.env.PARENT_EMAIL,
            to: vUser.email,
            subject: 'Verify your email for barefoot nomad',
            text: startLink
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                return response.status(200).send({
                    message: 'Check the email for the verification'+info.response
                })
            }
        });
    }
    static verifyIfEmailisAvailable = async (vuser) => {
        const allUsers = await user.findAll({
            where: {
                email: vuser.email
            }
        });
        if (allUsers.length != 0) {
            return false;
        } else {
            return true;
        }
    }

    static confirmEmail = async (request, response) => {
        const token = request.params.token;
        const decoded = jwtDecode(token);
        let suspectedUser = {};

        if (!decoded.hasOwnProperty('email') || !decoded.hasOwnProperty('password') || !decoded.hasOwnProperty('active')) {
            return response.status(409).send({
                message: "Link is invalid or Email is verified"
            })
        } else {
            suspectedUser = await user.findAll({
                where: {
                    email: decoded.email
                }
            });
            if (suspectedUser.length != 1) {
                return response.status(409).send({
                    message: "Email already verified"
                })
            }
            try {
                await user.update({
                    active: 'TRUE'
                }, {
                    where: {
                        email: decoded.email
                    }
                });
                return response.status(200).send({
                    message: "Email verified"
                })
            } catch (error) {
                return response.status(400).send({
                    message: "Invalid link"
                })
            }
        }
    }

}
module.exports = User;