import asyncHandler from 'express-async-handler';
import { Router } from 'express';
import tripController from '../../../controllers/tripController';
import authorize from '../../../middlewares/userAuthorization';
import checkTripOwner from '../../../middlewares/checkTripOwner';
import commentController from '../../../controllers/tripComment';

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

// comment
router.post('/:id/comment', authorize.userAuthorize, commentController.createComment);
router.delete('/:tripId/comment/:id/delete', authorize.userAuthorize, commentController.deleteComment);
router.get('/comments/:tripId', authorize.userAuthorize, commentController.list);

export default router;
