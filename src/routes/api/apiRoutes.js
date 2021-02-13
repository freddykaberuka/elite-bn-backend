import express from 'express';
import userRoutes from './users/userRoutes';
import rolePerm from './rolepermissions/rolepermissions';
import roleRoutes from './roles/roleRoutes';
import permissionRoutes from './permissions/permissions';
//import notificationsRoutes from './notifications/notifications';

const router = express.Router();
router.use('/users', userRoutes);
router.use('/rolesPermissions', rolePerm);
router.use('/roles', roleRoutes);
router.use('/Permissions', permissionRoutes);
//router.use('/notifications', notificationsRoutes);

export default router;
