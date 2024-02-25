const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require('../../swagger.json');

function swaggerDocs(app, port) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  console.log(`Docs available at http://localhost:${port}/api-docs`);
}

module.exports = swaggerDocs;
