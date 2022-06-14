const { readFile } = require('fs/promises');
const { sign, verify } = require('jsonwebtoken');

const generateToken = async ({ id, name, email, role }) => {
  const SECRET = await readFile('jwt.evaluation.key', 'utf-8');

  const jwtConfig = {
    expiresIn: '15d',
  };

  const token = sign(
    { data: { id, name, email, role } },
    SECRET,
    jwtConfig,
  );

  return token;
};

const validateToken = async (token) => {
  try {
    const SECRET = await readFile('jwt.evaluation.key', 'utf-8');

    const decoded = verify(token, SECRET);
    
    return decoded;
  } catch (error) {
    throw new Error('Expired or invalid token');
  }
};

module.exports = {
  generateToken,
  validateToken,
};
