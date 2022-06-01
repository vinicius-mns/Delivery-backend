const UserServices = require('../services/loginServices');

const createLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const data = await UserServices.createLogin({ email, password });

    if (!data) return res.status(400).json({ message: 'Invalid fields' });

    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

module.exports = { createLogin };
