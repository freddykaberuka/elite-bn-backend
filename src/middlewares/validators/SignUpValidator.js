/* eslint-disable */
import Joi from 'joi';

let  schema = Joi.object({
    email: Joi.string()
      .required()
      .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    password: Joi.string()
      .required()
  });

class SignUpValidator{
    constructor(){}

    static validate = async(_bodyArgument)=>{
        try{
            const value = await schema.validateAsync(_bodyArgument);
            return true;
        }catch(error){
            return error.details[0].message;
        }
    }
}
module.exports = SignUpValidator;