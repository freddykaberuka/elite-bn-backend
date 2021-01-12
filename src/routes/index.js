import { Router } from 'express';
import swaggerUI from 'swagger-ui-express';
import welcomeRoute from './welcome';
import Badroute from './badroute';
import swaggerDocs from '../swagger';

const router = Router();

router.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

router.use('/', welcomeRoute);

router.use('/', Badroute);

export default router;
