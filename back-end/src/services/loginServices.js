const { sign } = require('jsonwebtoken');
const md5 = require('md5');
const { readFile } = require('fs/promises');
const { Users } = require('../database/models');

const createLogin = async ({ email, password }) => {
  const user = await Users.findOne({ where: { email } });

  if (!user) return false;

  if (!(user.password && md5(password))) return false;

  const SECRET = await readFile('jwt.evaluation.key', 'utf-8');

  const token = sign({ data: { role: user.role, name: user.name } }, SECRET, {
    expiresIn: '15d',
  });

  return {
    token,
    user: { role: user.role, name: user.name, email: user.email },
  };
};

module.exports = { createLogin };
