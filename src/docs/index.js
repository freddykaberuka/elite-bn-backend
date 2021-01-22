import dotenv from 'dotenv';
import welcome from './welcome';

dotenv.config();

const paths = { ...welcome };
const config = {
  info: {
    title: 'elite-bn-backend',
    version: '1.0.0',
    description: 'Make company global travel and accommodation easy and convenient for the strong workforce of savvy members of staff, by leveraging the modern web',
  },
  host: process.env.HOST,
  basePath: '/',
  schemes: ['http', 'https'],
  paths
};

export default config;
