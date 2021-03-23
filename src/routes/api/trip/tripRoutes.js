import asyncHandler from 'express-async-handler';
import { Router } from 'express';
import tripController from '../../../controllers/tripController';
import authorize from '../../../middlewares/userAuthorization';

const router = Router();

router
  .route('/:page/:itemsPerPage')
  .get(
    authorize.userAuthorize,
    asyncHandler(tripController.findAllTrips),
  );
router
  .route('/')
  .post(authorize.userAuthorize, asyncHandler(tripController.create));
router
  .route('/cancel-travel-request/:id')
  .patch(authorize.userAuthorize, asyncHandler(tripController.cancelRequest));
router
  .route('/approve-travel-request/:id')
  .patch(authorize.userAuthorize, asyncHandler(tripController.approveRequest));
router
  .route('/reject-travel-request/:id')
  .patch(authorize.userAuthorize, asyncHandler(tripController.rejectRequest));
router
  .route('/update-travel-request/:id')
  .patch(authorize.userAuthorize, asyncHandler(tripController.updateTrip));

export default router;
