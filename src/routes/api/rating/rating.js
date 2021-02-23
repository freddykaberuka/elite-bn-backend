/*eslint-disable */
import express from 'express';
import authorize from '../../../middlewares/userAuthorization';
import RatingsController from '../../../controllers/rateAndReviewController';
import ratingValidator from '../../../middlewares/validators/ratings';
import reviewsValidator from '../../../middlewares/validators/review';
const router = express();

router.post('/rate', ratingValidator.validate, ratingValidator.sendToken,ratingValidator.doesAccomodationExists, authorize.userAuthorize, RatingsController.rateAccomodation);
router.get('/accomodationratings', ratingValidator.sendToken,RatingsController.getRating);
export default router;
