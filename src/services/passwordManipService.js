import bcrypt from 'bcrypt';

class PasswordManip{
    static hashPassword = (plainPassword) =>{
        bcrypt.hash(plainPassword, 12, (error, hash) =>{
            if(hash){
                return hash;
            }
        })
    }
    // static comparePassword = (plainPassword, hashedPassword, (error, result)=>{
    //     if(result){
    //         return result;
    //     }
    // })
}
export default PasswordManip;