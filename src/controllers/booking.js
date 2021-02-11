import bookingService from '../services/bookingService';
import accomodationService from '../services/accomodationServices';
import Util from '../helpers/utils';
import jwt from 'jsonwebtoken';

const util = new Util();
export default class  Booking{
    static book = async(req, res)=>{
        try{
              const {AccomodationId, checkinDate, checkoutDate} = req.body;
              const UserId = await jwt.verify(req.headers['authorization'].split(' ')[1], process.env.PRIVATE_KEY).id;
              const accomodationDetails = await accomodationService.findByAccomoId((AccomodationId));
              if(accomodationDetails[0].dataValues.roomsLeft < 1){
                  util.setError(400, "This accomodation is already full");
                  return util.send(res);
              }
              const updateRooms = await accomodationService.updateAtt({roomsLeft: (accomodationDetails[0].dataValues.roomsLeft -1)}, {id:AccomodationId });
              const bookingDetails = {
                  UserId,
                  AccomodationId,
                  checkinDate: new Date(checkinDate).setHours(0,0,0,0),
                  checkoutDate: new Date(checkoutDate).setHours(0,0,0,0)           
              };
              await bookingService.createbooking(bookingDetails);
              util.setSuccess(200, "Accomodation booked successfully", bookingDetails);
              return util.send(res);
        }catch(error){
            util.setError(500, error.message);
            return util.send(res);
        }
    }
    static async allBookedAccomodations(req, res){
        try{
            const UserId = await jwt.verify(req.headers['authorization'].split(' ')[1], process.env.PRIVATE_KEY).id;
            const bookedAcc =  await bookingService.getMultipleBooking({UserId:UserId});

            util.setSuccess(200, "All Booked Accomodations", bookedAcc);
            return util.send(res);
        }catch(error){
            util.setError(400,error);
            return util.send(res);
        }
    }
    static async allAvailableAccomodations(req, res){
        try{
            const forbiddenAccomodations = [];
    
            const UserId = await jwt.verify(req.headers['authorization'].split(' ')[1], process.env.PRIVATE_KEY).id;
            const bookedAcc =  await bookingService.getIdsOnCondition({UserId:UserId});
            bookedAcc.forEach((accomodation)=>{
                forbiddenAccomodations.push(accomodation.dataValues.id);
            });
            if(forbiddenAccomodations == null || forbiddenAccomodations.length == 0){
                const availableAccomodations = await accomodationService.getAccomodations();
                util.setSuccess(200, "All available accomodations for you", availableAccomodations );
                return util.send(res);
            }else{
                const availableAccomodations = await accomodationService.findWithoutId(forbiddenAccomodations);
            util.setSuccess(200, "All available accomodations for you", availableAccomodations );
            return util.send(res);
            }
            
        }catch(error){
            util.setError(400,error);
            return util.send(res);
        }
    }
}

