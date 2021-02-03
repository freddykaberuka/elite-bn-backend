import swaggerUI from 'swagger-ui-express';
import express from 'express';
import dotenv from 'dotenv';
import passport from 'passport';
import router from './routes/index';
import swaggerDocs from './docs/index';

dotenv.config();

const app = express();
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());
router.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use(router);

export default app;
