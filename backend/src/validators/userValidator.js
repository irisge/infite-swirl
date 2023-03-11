const Joi = require('joi');

const validateUser = (user, createMod) => {
  const mode = createMod ? 'required' : 'optional';
  const result = Joi.object({
    firstname: Joi.string().min(2).max(30).presence(mode),
    lastname: Joi.string().min(2).max(30).presence(mode),
    email: Joi.string().email().presence(mode),
    password: Joi.string()
      .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[+-_?!@#$%^&*]).{8,}$/)
      .presence(mode),
    birthdate: Joi.date().less('01-04-2005'),
    street: Joi.string().min(5).max(50),
    zip: Joi.number().positive().integer().presence(mode),
    city: Joi.string().required(mode),
  })
    .required()
    .min(1)
    .validate(user, { abortEarly: false }).error;

  if (result) {
    const errorMessages = result.details.map((error) => ({
      message: error.message,
    }));

    return { errorCount: result.details.length, errorMessages };
  }

  return result;
};

module.exports = validateUser;
