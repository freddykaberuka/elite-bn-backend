import express from 'express';
import locationController from '../../../controllers/location';
import locationValidator from '../../../middlewares/validators/locationValidator';
import authorize from '../../../middlewares/userAuthorization';

const router = express();

router.post('/create', authorize.userAuthorize, locationValidator.createLocations, locationController.createLocation);
router.get('/read', locationController.getLocations);
router.delete('/delete/:id', authorize.userAuthorize, locationController.deleteLocations);
router.patch('/update/:id', authorize.userAuthorize, locationController.updateLocation);

export default router;
