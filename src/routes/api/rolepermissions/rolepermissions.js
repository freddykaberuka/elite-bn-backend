import express from 'express';
import rolesPermController from '../../../controllers/rolepermission';
import authorize from '../../../middlewares/userAuthorization';

const router = express.Router();

router
        .get('/',authorize.userAuthorize, rolesPermController.allRolePermission)
        .post('/save',authorize.userAuthorize, rolesPermController.saveRolePerm)
        .get('/findById/:id',authorize.userAuthorize, rolesPermController.findRolePerm)
        .get('/findByPermByRole/:id',authorize.userAuthorize, rolesPermController.findPermByRole)
        .patch('/update/:id',authorize.userAuthorize, rolesPermController.updateRolePerm)
        .delete('/delete/:id',authorize.userAuthorize, rolesPermController.deleteRolePerm);

export default router;
