const { ModelValidationError } = require('../errors/ModelValidationError');
const {
  InvalidCredentialsError,
} = require('../errors/InvalidCredentialsError');
const { SQLGenericError } = require('../errors/SQLGenericError');

const errorHandler = (err, req, res, next) => {
  const errorTypes = [
    ModelValidationError,
    InvalidCredentialsError,
    SQLGenericError,
  ];

  if (errorTypes.some((errorType) => errorType.prototype.isPrototypeOf(err))) {
    res.status(err.statusCode).send(err.details);
  } else {
    return res.sendStatus(500);
  }
};

module.exports = { errorHandler };
