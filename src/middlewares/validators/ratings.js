/*eslint-disable */
import RatingsValidationSchema from '../../helpers/validateSchemas/rating';
import Util from '../../helpers/utils';
import jwt from 'jsonwebtoken';
import accomodationService from '../../services/accomodationServices';

const util = new Util();
class ratingsValidation{
    static validate = (req, res, next)=>{
        const {error} = RatingsValidationSchema.validate(req.body);
        if(error){
            util.setError(400, error.message);
            return util.send(res);
        }else{
            next();
        }
    }
    static sendToken = (req, res, next)=>{
        try{
            const UserId =  jwt.verify(req.headers['authorization'].split(' ')[1], process.env.PRIVATE_KEY).id;
            req.userId = UserId;
            next();
        }catch(error){
            util.setError(400, error.message);
            return util.send(res);
        } 
    }
    static doesAccomodationExists = async(req, res, next)=>{
        const accomodationid = Number(req.body.accomodationId);
        const accomodation = await accomodationService.findByProp({id: accomodationid});
        if(accomodation == null || accomodation.length == 0){
            util.setError(404, 'Accomodation does not exist');
            return util.send(res);
        }else{
            next();
        }
    }
    
}
export default ratingsValidation;