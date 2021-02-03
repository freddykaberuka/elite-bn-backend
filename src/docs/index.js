import dotenv from 'dotenv';
import welcome from './welcome';

dotenv.config();

const paths = { ...welcome };

const config = {
  swaggerDefinition: {
    info: {
      title: "Bernard Portfolio API",
      version: '1.0.0',
    },
  },
  apis: ["src/docs/*.js"]
};


export default config;
