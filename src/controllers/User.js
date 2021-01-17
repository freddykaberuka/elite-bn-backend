const UserModel = require('../models/user');
const SignUpValidator = require('../middlewares/validators/SignUpValidator');

class User{
    static signUp = async(request, response)=>{
       (async()=>{
        const valid = await SignUpValidator.validate(request.body);
        if(valid !== true){
            return response.status(400).send({
                message: "Bad Request",
                valid
            })
        }
       })();
       
    }
}
module.exports = User;