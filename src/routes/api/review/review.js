/*eslint-disable */
import express from 'express';
import authorize from '../../../middlewares/userAuthorization';
import reviewValidator from '../../../middlewares/validators/review';
import rateAndReviewController from '../../../controllers/rateAndReviewController';
const router = express.Router();

router.post('/review', reviewValidator.doesAccomodationExists, reviewValidator.validate, reviewValidator.sendToken, authorize.userAuthorize, rateAndReviewController.reviewAccomodation);
router.get('/allreviews', rateAndReviewController.getReview);

export default router;
