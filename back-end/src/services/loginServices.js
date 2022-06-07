const md5 = require('md5');
const { Users } = require('../database/models');
const { generateToken } = require('./authService');

const createLogin = async ({ email, password }) => {
  const user = await Users.findOne({ where: { email } });

  if (!user) return false;

  if (!(user.password && md5(password))) return false;

  const token = await generateToken(user);

  return {
    token,
    user: { role: user.role, name: user.name, email: user.email },
  };
};

module.exports = { createLogin };
