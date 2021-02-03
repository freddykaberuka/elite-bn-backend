import express from 'express';
import locationController from '../../../controllers/location';
import isAuthenticated from '../../../middlewares/authorization';

const router = express();

router.post('/create', isAuthenticated, locationController.createLocation);
router.get('/read', locationController.getLocations);
router.delete('/:id', isAuthenticated, locationController.deleteLocations);
router.patch('/update/:id', isAuthenticated, locationController.updateLocation);

export default router;
