const md5 = require('md5');
const { Users } = require('../database/models');
const authService = require('./authService');

const findByEmail = async (email) => {
  const user = await Users.findOne({ where: { email } });

  if (!user) return false;

  return user;
};

const createUser = async (user) => {
    const { name, email, password } = user;
    const md5pass = md5(password);
    const foundUser = await findByEmail(email);

    if (foundUser) return false;

    const role = 'customer';
    const newUser = await Users.create({ name, email, password: md5pass, role });

    const token = await authService.generateToken(newUser);
  
    return {
      token,
      user: { role: newUser.role, name: newUser.name, email: newUser.email },
    };
};

module.exports = { createUser, findByEmail };