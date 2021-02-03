import express from 'express';
import accomodationController from '../../../controllers/accomodations';
import isAuthenticated from '../../../middlewares/authorization';

const router = express();

router.post('/create', isAuthenticated, accomodationController.createAccomodations);
router.get('/read', accomodationController.getAccomodations);
router.get('/read/:location_id', accomodationController.getAccomBylocatonId);
router.delete('/:accomodation', isAuthenticated, accomodationController.deleteAcoomodations);
router.patch('/:accomodation', isAuthenticated, accomodationController.updateAccomodation);
export default router;
