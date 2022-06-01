const { sign } = require('jsonwebtoken');
const { readFile } = require('fs/promises');
const md5 = require('md5');
const { User } = require('../database/models');

const createUser = async (user) => {
    const { name, email, password } = user;
    const md5pass = md5(password);
    const findUser = await User.findOne({ where: { email } });

    if (findUser) return false;

    const role = 'customer';
    const newUser = await User.create({ name, email, password: md5pass, role });
    
    const SECRET = await readFile('jwt.evaluation.key', 'utf-8');

    const token = sign({ data: { role: newUser.role, name: newUser.name } }, SECRET, {
      expiresIn: '15d',
    });
  
    return {
      token,
      user: { role: newUser.role, name: newUser.name, email: newUser.email },
    };
};

module.exports = { createUser };