import express from 'express';
import locationController from '../../../controllers/location';
// import isAuthenticated from '../../../middlewares/authorization';

const router = express();

router.post('/create', locationController.createLocation);
router.get('/read', locationController.getLocations);
router.delete('/:id', locationController.deleteLocations);
router.patch('/update/:id', locationController.updateLocation);

export default router;
