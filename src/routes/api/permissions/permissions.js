import express from 'express';
import permissionController from '../../../controllers/permissionController';
import authorization from '../../../middlewares/userAuthorization';

const router = express.Router();

router
  .get('/', authorization.userAuthorize, permissionController.getAllPermission)
  .post('/save', authorization.userAuthorize, permissionController.createPermission)
  .get('/findById/:id', authorization.userAuthorize, permissionController.findPermissionById)
  .patch('/update/:id', authorization.userAuthorize, permissionController.updatePermission)
  .delete('/delete/:id', authorization.userAuthorize, permissionController.deletePermission);

export default router;
