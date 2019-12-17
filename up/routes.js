const express = require('express');
const cors = require('cors');
const auth = require('.././routes/auth');
const errorHandler = require('.././middleware/error');

module.exports = function(app) {
  app.use(express.json());
  app.use(cors());
  app.use('/api/v1/auth', auth);
  app.use(errorHandler);
}