import express from 'express';
import rolesPermController from '../../../controllers/rolepermission';
import authorization from '../../../middlewares/userAuthorization';

const router = express.Router();

router
  .get('/', authorization.userAuthorize, rolesPermController.allRolePermission)
  .post('/save', authorization.userAuthorize, rolesPermController.saveRolePerm)
  .get('/findById/:id', authorization.userAuthorize, rolesPermController.findRolePerm)
  .patch('/update/:id', authorization.userAuthorize, rolesPermController.updateRolePerm)
  .delete('/delete/:id', authorization.userAuthorize, rolesPermController.deleteRolePerm);

export default router;
