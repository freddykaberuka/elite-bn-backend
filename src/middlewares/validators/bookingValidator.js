/*eslint-disable */
import bookingValidationSchema from '../../helpers/validateSchemas/bookingSchema';
import Util from '../../helpers/utils';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import accomodationService from '../../services/accomodationServices';
import bookingService from  '../../services/bookingService';

dotenv.config();
const util = new Util();
export default class BookingValidator{
    static validateBooking = async(req, res, next) =>{
        try{
            const {error} = bookingValidationSchema.validate(req.body);
        if(error){
            util.setError(400, error.message);
            return util.send(res);
        }
        const token = req.headers['authorization'].split(' ')[1];
        const verifyToken = jwt.verify(token, process.env.PRIVATE_KEY);

        next();
        }catch(error){
            util.setError(400, error.message);
            return util.send(res);
        }

    }
    static isRoomBookedByYou = async(req,res,next)=>{
        const UserId =await jwt.verify(req.headers['authorization'].split(' ')[1], process.env.PRIVATE_KEY).id;
        const bookedRooms = await bookingService.findWithAnd([{UserId:UserId},{AccomodationId:req.body.AccomodationId}]);
        if(bookedRooms == null || bookedRooms.length == 0){
            req.UserId = UserId;
            next();
        }else{
            util.setError(403, 'You have already booked this accomodation');
            return util.send(res);
        }
    }
    static doesAccomodationExists = async(req, res, next)=>{
        const accomodationid = Number(req.body.AccomodationId);
        const accomodation = await accomodationService.findByProp({id: accomodationid});
        if(accomodation == null || accomodation.length == 0){
            util.setError(404, 'Accomodation does not exist');
            return util.send(res);
        }else{
            next();
        }
    }
    static checkTokenOnly(req, res, next){
        try{ 
        const token = req.headers['authorization'].split(' ')[1];
        const verifyToken = jwt.verify(token, process.env.PRIVATE_KEY);
        req.UserId = jwt.verify(token , process.env.PRIVATE_KEY).id;
        next();
        }catch(error){
            util.setError(400, error.message);
            return util.send(res);
        }
    }
}
