import express from 'express';
import userRoutes from './users/userRoutes';
import rolePerm from './rolepermissions/rolepermissions';

const router = express.Router();

router.use('/users', userRoutes);
router.use('/rolesPermissions', rolePerm);

export default router;
