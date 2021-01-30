import express from 'express';
import rolesPermController from '../../../controllers/rolepermission';

const router = express.Router();

router.get('/', rolesPermController.allRolePermission);
router.post('/save', rolesPermController.saveRolePerm);
router.get('/findById/:id', rolesPermController.findRolePerm);
router.patch('/update/:id', rolesPermController.updateRolePerm);
router.delete('/delete/:id', rolesPermController.deleteRolePerm);

export default router;
