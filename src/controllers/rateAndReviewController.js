/*eslint-disable */
import Util from '../helpers/utils';
import RatingService from '../services/ratingService';
import ReviewService from '../services/reviewService';

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

  static reviewAccomodation = async(req, res, next)=> {
    try{
      const reviewInformation = req.body;
      reviewInformation.userId = req.userId;
      const reviweAcc = await ReviewService.addReview(reviewInformation);
      util.setSuccess(200, 'written review succesfully added');
      return util.send(res);
    }catch(error){
      util.setError(400, error.message);
      return util.send(res);
    }
  }
  static getRating =async (req, res)=>{
    try{
      const getRate = await RatingService.getRating();
      if(getRate){
        util.setSuccess(200,'Rating and Reviews',getRate);
        return util.send(res);
      }
      util.setError(400, error.message);
    }catch(error){
      util.setError(404,error.message);
      return util.send(res);
    }
   }
   static getReview =async (req, res)=>{
    try{
      const getReview = await ReviewService.getReview();
      if(getReview){
        util.setSuccess(200,'Reviews',getReview);
        return util.send(res);
      }
      util.setError(400, error.message);
    }catch(error){
      util.setError(404,error.message);
      return util.send(res);
    }
   }


}
export default ReviewController;

