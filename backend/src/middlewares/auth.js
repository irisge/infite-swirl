const { decodeJWT } = require('../helpers/jwtHelper');

const authorization = async (req, res, next) => {
  try {
    const bearerToken = req.headers.authorization;
    if (!bearerToken) throw new Error();
    const [_, token] = bearerToken.split(' ');
    const data = decodeJWT(token);
    req.userId = data.id;
    req.userEmail = data.email;
    return next();
  } catch (e) {
    console.log(e);
    res.sendStatus(401);
  }
};

module.exports = authorization;
