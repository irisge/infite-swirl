const { findByEmail } = require('../models/userModels');
const { encodeJWT } = require('../helpers/jwtHelper');
const { verifyPassword } = require('../helpers/argonHelper');
const validateLogin = require('../validators/loginValidator');

const login = async (req, res) => {
  try {
    const errors = validateLogin(req.body);
    console.log(errors);

    if (errors) return res.status(401).send(errors);

    const [user] = await findByEmail(req.body.email);
    console.log(user);

    if (!user) return res.status(401).send('Invalid credentials');

    const passwordVerfication = await verifyPassword(
      user.password,
      req.body.password
    );

    if (!passwordVerfication) return res.status(401).send('Invalid password');

    const token = encodeJWT(user);

    res.json({ token });
  } catch (e) {
    console.log(e);
  }
};

const logout = async (req, res) => {};

module.exports = { login, logout };
