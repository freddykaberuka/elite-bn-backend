import express from 'express';
import rolesController from '../../../controllers/roleController';
// import validator from '../../../middlewares/validators/validate';
import authorize from '../../../middlewares/userAuthorization';

const router = express.Router();
router.get('/',authorize.userAuthorize, rolesController.allRoles);
router.post('/save', rolesController.saveRole);
router.get('/findById/:id', rolesController.findRole);
router.get('/findByName/:name', rolesController.findRoleByName);
router.put('/update/:id', rolesController.updateRole);
router.delete('/delete/:id', rolesController.deleteRole);
export default router;
