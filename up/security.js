const mongoSanitize = require('express-mongo-sanitize');
const helmet = require('helmet');
const xss = require('xss-clean');
const rateLimit = require('express-rate-limit');
const hpp = require('hpp');

module.exports = function(app) {
  app.use(mongoSanitize());
  app.use(helmet());
  app.use(xss());
  const limiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 minutos
    max: 1
  });
  app.use(limiter);
  app.use(hpp());
}