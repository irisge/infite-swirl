require('dotenv').config();
require('express-async-handler');
const express = require('express');
const router = require('./router');

const { errorHandler } = require('./middlewares/errorHandler');

const app = express();

app.use(express.json());

app.use('/api', router);

app.use(errorHandler);

app.get('*', (req, res) => {
  res.status(404).send('Not Found');
});

module.exports = app;
