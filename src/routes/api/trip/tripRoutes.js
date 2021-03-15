import asyncHandler from 'express-async-handler';
import { Router } from 'express';
import tripController from '../../../controllers/tripController';
import authorize from '../../../middlewares/userAuthorization';
import checkTripOwner from '../../../middlewares/checkTripOwner';

const router = Router();

router
  .route('/findById/:id')
  .get(
    authorize.userAuthorize,
    checkTripOwner,
    asyncHandler(tripController.findTrip),
  );
router
  .route('/save')
  .post(authorize.userAuthorize, asyncHandler(tripController.create));

export default router;
