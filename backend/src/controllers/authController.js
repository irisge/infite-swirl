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
      req.body.password
    );

    if (!passwordVerfication) {
      throw new InvalidCredentialsError('Invalid password');
    }

    const token = encodeJWT(user);

    // Warning: secure should be true for production

    res.cookie('aabs', token, { httpOnly: true, secure: false });
    res.sendStatus(200).json({ userId: user.id });
  } catch (e) {
    next(e);
  }
};

const logout = async (req, res) => {
  res.clearCookie('aabs').sendStatus(200);
};

module.exports = { login, logout };
