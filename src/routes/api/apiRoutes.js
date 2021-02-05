import express from 'express';
import userRoutes from './users/userRoutes';
import rolePerm from './rolepermissions/rolepermissions';
import roleRoutes from './roles/roleRoutes';
import permissionRoutes from './permissions/permissions';

const router = express.Router();
router.use('/users', userRoutes);
router.use('/rolesPermissions', rolePerm);
router.use('/roles', roleRoutes);
router.use('/Permissions', permissionRoutes);

export default router;
