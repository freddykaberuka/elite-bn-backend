import asyncHandler from 'express-async-handler';
import { Router } from 'express';
import tripController from '../../../controllers/tripController';
import authorize from '../../../middlewares/userAuthorization';
import commentController from '../../../controllers/tripComment';

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

// comment
router.post('/:id/comment', authorize.userAuthorize, commentController.createComment);
router.delete('/:tripId/comment/:id/delete', authorize.userAuthorize, commentController.deleteComment);
router.get('/comments/:tripId', authorize.userAuthorize, commentController.list);

export default router;
