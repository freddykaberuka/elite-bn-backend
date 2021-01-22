import { Router } from 'express';
// import welcomeRoute from './welcome';
import Badroute from './badroute';
// import Auth from './auth';
import api from './api/apiRoutes';
import dotenv from 'dotenv';
import welcomeMessage from '../controllers/index';

dotenv.config();
const version = process.env.API_VERSION || 'v1';
const url = `/api/${version}`;

const router = Router();

router.get('/', welcomeMessage);

router.use(url, api);

// router.use('/auth/', Auth);

// router.use('/', welcomeRoute);

// router.use('/', Badroute);


export default router;
