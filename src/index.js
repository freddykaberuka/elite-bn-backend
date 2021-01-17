import express from 'express';
import dotenv from 'dotenv';
import router from './routes/index';

const db = require('./config/database');

try {
  (async () => {
    await db.authenticate();
    console.log('Success, Database connected');
  })();
} catch (error) {
  console.log('Failure');
}

dotenv.config();
const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use('/', router);

app.listen(port, () => {
  console.log('server started at:...', port);
});

export default app;
