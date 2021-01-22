import swaggerUI from 'swagger-ui-express';
import express from 'express';
import dotenv from 'dotenv';
import router from './routes/index';
import swaggerDocs from './docs/index';
import fcn from '../src/services/fileOpener';

dotenv.config();

const app = express();
app.use(express.json());
router.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use(router);


export default app;
