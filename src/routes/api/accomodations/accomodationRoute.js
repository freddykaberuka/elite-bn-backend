import express from 'express';
import accomodationController from '../../../controllers/accomodations';
// import isAuthenticated from '../../../middlewares/authorization';

const router = express();

router.post('/create', accomodationController.createAccomodations);
router.get('/read', accomodationController.getAccomodations);
router.get('/read/:location_id', accomodationController.getAccomBylocatonId);
router.delete('delete/:accomodation', accomodationController.deleteAcoomodations);
router.patch('update/:accomodation', accomodationController.updateAccomodation);
export default router;
