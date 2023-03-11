const express = require('express');
const router = require('./router');

const app = express();

app.use(express.json());

app.use('/api', router);

app.get('*', (req, res) => {
  res.status(404).send('Not Found');
});

module.exports = app;