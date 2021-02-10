import express from 'express';
import accomodationController from '../../../controllers/accomodations';
import accomodationValidator from '../../../middlewares/validators/accomodationValidator';
import authorize from '../../../middlewares/userAuthorization';
import { upload } from '../../../helpers/multer';

const router = express();

router.post('/create', authorize.userAuthorize, upload.single('accomodationImage'), accomodationValidator.createAccomodation, accomodationController.createAccomodations);
router.get('/read', accomodationController.getAccomodations);
router.get('/read/:location_id', authorize.userAuthorize, accomodationController.getAccomBylocatonId);
router.delete('delete/:accomodation', authorize.userAuthorize, accomodationController.deleteAcoomodations);
router.patch('update/:accomodation', authorize.userAuthorize, accomodationController.updateAccomodation);
export default router;
