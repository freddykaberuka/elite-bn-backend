import swaggerJSDoc from 'swagger-jsdoc';

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'elite-bn-backend',
      version: '1.0.0',
      description: 'Make company global travel and accommodation easy and convenient for the strong workforce of savvy members of staff, by leveraging the modern web',
      servers: ['https://localhost:8000'],
    },
  },
  apis: ['src/routes/*.js'],
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);

export default swaggerDocs;
