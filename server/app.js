const express = require('express');
const cors = require('cors');

const app = express();
const router = require('./routes');
const { errorHandler } = require('./errorHandler');

app.use(express.json());

app.use(cors());

app.use('/api', router);

app.use(errorHandler);

module.exports = app;