const LoginServices = require('../services/loginServices');

const createLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const data = await LoginServices.createLogin({ email, password });

    if (!data) return res.status(404).json({ message: 'Invalid fields' });

    return res.status(200).json(data);
  } catch (error) {
    return next(error);
  }
};

module.exports = { createLogin };
