/*eslint-disable */
import Util from '../helpers/utils';
import RatingService from '../services/ratingService';

const util = new Util();
 class ReviewController {
  
  static rateAccomodation = async(req, res, next)=> {
    try{
      const ratingInformation = req.body;
      ratingInformation.userId = req.userId;
      const rateAcc = await RatingService.addRating(ratingInformation);
      util.setSuccess(200, 'Rate succesfully added');
      return util.send(res);
    }catch(error){
      util.setError(400, error.message);
      return util.send(res);
    }
  }



}
export default ReviewController;

