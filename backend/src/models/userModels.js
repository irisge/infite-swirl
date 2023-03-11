const db = require('./db');

const findAll = async () => {
  try {
    const [users] = await db.query('SELECT * FROM user');
    return users;
  } catch (e) {
    console.log(e);
  }
};

const findOne = async (id) => {
  try {
    const [user] = await db.query('SELECT * FROM user WHERE id = ?', [id]);
    return user;
  } catch (e) {
    console.log(e);
  }
};

const addOne = async (user) => {
  try {
    const {
      firstname,
      lastname,
      email,
      password,
      birthdate,
      street,
      zip,
      city,
    } = user;
    const [result] = await db.query(
      'INSERT INTO user (firstname, lastname, email, password, birthdate, street, zip, city) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [firstname, lastname, email, password, birthdate, street, zip, city]
    );
    return { id: result.insertId, email };
  } catch (e) {
    console.log(e);
  }
};

const findByEmail = async (email) => {
  try {
    const [user] = await db.query('SELECT * FROM user WHERE email = ?', [
      email,
    ]);
    return user;
  } catch (e) {
    console.log(e);
  }
};

module.exports = { findAll, findOne, addOne, findByEmail };
