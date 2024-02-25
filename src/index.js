const express =require('express');
const morgan =require( 'morgan');
const config =require( 'config'); 
const cors = require('cors')
const bodyParser = require('body-parser');
const connect = require('./utils/connect.js');
const swaggerDocs = require('./utils/swagger.js');
const winston = require('winston');

const app = express();
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
const PORT = process.env.PORT || config.get('port');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});
app.use('/api', require('./api/api.js'));

app.use((err, req, res, next) => {
  logger.error(err.message);
  res.status(500).send('Internal Server Error');
});

app.listen(PORT, async () => {
  await connect();

  swaggerDocs(app, PORT);

  console.log(`App is running at http://localhost:${PORT}`);
});

module.exports = app;