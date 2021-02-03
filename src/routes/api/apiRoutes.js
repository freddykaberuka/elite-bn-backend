import express from 'express';
import userRoutes from './users/userRoutes';
import accomodationRoutes from './accomodations/accomodationRoute';
import locationRoutes from './locations/locationRoute';

const router = express.Router();

router.use('/users', userRoutes);
router.use('/accomodations', accomodationRoutes);
router.use('/locations', locationRoutes);

export default router;
