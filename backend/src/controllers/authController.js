const { findByEmail } = require('../models/userModels');
const { encodeJWT } = require('../helpers/jwtHelper');
const { verifyPassword } = require('../helpers/argonHelper');
const validateLogin = require('../validators/loginValidator');
const { ModelValidationError } = require('../errors/ModelValidationError');
const {
  InvalidCredentialsError,
} = require('../errors/InvalidCredentialsError');

const login = async (req, res, next) => {
  try {
    const errors = validateLogin(req.body);
    console.log(errors);

    if (errors) throw new ModelValidationError(errors);

    const [user] = await findByEmail(req.body.email);

    if (!user) throw new InvalidCredentialsError('Invalid credentials');

    const passwordVerfication = await verifyPassword(
      user.password,
      req.body.password,
    );

    if (!passwordVerfication) throw new InvalidCredentialsError('Invalid password');

    const token = encodeJWT(user);

    res.json({ token });
  } catch (e) {
    next(e);
  }
};

const logout = async (req, res) => {};

module.exports = { login, logout };
