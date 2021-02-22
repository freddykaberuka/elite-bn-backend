import swaggerUI from 'swagger-ui-express';
import express from 'express';
import dotenv from 'dotenv';
import passport from 'passport';

import bodyParser from 'body-parser';
import router from './routes/index';
import swaggerDocs from './docs/index';

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());
router.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use(router);

export default app;
