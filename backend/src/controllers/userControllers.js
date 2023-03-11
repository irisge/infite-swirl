const { findAll, findOne, addOne } = require('../models/userModels');
const validateUser = require('../validators/userValidator');
const { hashPassword } = require('../helpers/argonHelper');

const getAll = async (req, res) => {
  try {
    const users = await findAll();
    res.send(users);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
};

const getOne = async (req, res) => {
  const userId = parseInt(req.params.id, 10);

  try {
    const user = findOne(userId);
    res.send(user);
  } catch (e) {
    res.sendStatus(500);
  }
};

const createOne = async (req, res) => {
  try {
    const errors = validateUser(req.body);

    if (errors) throw res.status(401).send(errors);

    const hashedPassword = await hashPassword(req.body.password);

    const result = await addOne({ ...req.body, password: hashedPassword });

    res.status(201).send(result);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
};

module.exports = { getAll, getOne, createOne };
