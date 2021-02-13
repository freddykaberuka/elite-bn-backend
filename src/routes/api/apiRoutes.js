import express from 'express';
import userRoutes from './users/userRoutes';
import rolePerm from './rolepermissions/rolepermissions';
import roleRoutes from './roles/roleRoutes';
import permissionRoutes from './permissions/permissions';
//import notificationsRoutes from './notifications/notifications';
import accomodationRoutes from './accomodations/accomodationRoute';
import locationRoutes from './locations/locationRoute';
const router = express.Router();
router.use('/users', userRoutes);
router.use('/rolesPermissions', rolePerm);
router.use('/roles', roleRoutes);
router.use('/Permissions', permissionRoutes);
//router.use('/notifications', notificationsRoutes);
router.use('/accomodations', accomodationRoutes);
router.use('/locations', locationRoutes);

export default router;
