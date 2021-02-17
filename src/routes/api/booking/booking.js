/*eslint-disable */
import express from 'express';
import bookingController from '../../../controllers/booking';
import authorize from '../../../middlewares/userAuthorization';
import BookingValidator from '../../../middlewares/validators/bookingValidator';
const router = express();

router.post('/book',BookingValidator.validateBooking,BookingValidator.doesAccomodationExists,BookingValidator.isRoomBookedByYou, authorize.userAuthorize, bookingController.book);
router.get('/availableAccomodations',BookingValidator.checkTokenOnly, bookingController.allAvailableAccomodations);
router.get('/bookedAccomodations',BookingValidator.checkTokenOnly, bookingController.allBookedAccomodations);
export default router;
