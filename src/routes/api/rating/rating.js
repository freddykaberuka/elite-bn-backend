/*eslint-disable */
import express from 'express';
import authorize from '../../../middlewares/userAuthorization';
import RatingsController from '../../../controllers/rateAndReviewController';
import ratingValidator from '../../../middlewares/validators/ratings';
import reviewsValidator from '../../../middlewares/validators/review';
const router = express();

router.post('/rate', ratingValidator.validate, ratingValidator.sendToken,ratingValidator.doesAccomodationExists, authorize.userAuthorize, RatingsController.rateAccomodation);
router.post('/review', reviewsValidator.validate, reviewsValidator.sendToken,reviewsValidator.doesAccomodationExists, authorize.userAuthorize,RatingsController.rateAccomodation);
router.get('/rateReviews', RatingsController.getRating);
export default router;
