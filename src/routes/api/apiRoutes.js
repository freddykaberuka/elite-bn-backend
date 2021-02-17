import express from 'express';
import userRoutes from './users/userRoutes';
import rolePerm from './rolepermissions/rolepermissions';
import roleRoutes from './roles/roleRoutes';
import permissionRoutes from './permissions/permissions';
import accomodationRoutes from './accomodations/accomodationRoute';
import locationRoutes from './locations/locationRoute';
import bookingRoutes from './booking/booking'

const router = express.Router();
router.use('/users', userRoutes);
router.use('/rolesPermissions', rolePerm);
router.use('/roles', roleRoutes);
router.use('/Permissions', permissionRoutes);
router.use('/accomodations', accomodationRoutes);
router.use('/locations', locationRoutes);
router.use('/booking', bookingRoutes);

export default router;
