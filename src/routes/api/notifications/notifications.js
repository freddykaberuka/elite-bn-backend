/*eslint-disable*/
import express from 'express';
import { UserAuthentication } from '../../../middlewares/auth';
import notificationsController from '../../../controllers/notifications';

const router = express.Router();
router.get('/', UserAuthentication, notificationsController.showAllNotifications);
router.get('/:notification', UserAuthentication, notificationsController.readOneNotification);

export default router;