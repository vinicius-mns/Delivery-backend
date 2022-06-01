const userService = require('../services/userServices');

const createUser = async (req, res, next) => {
    try {
      const { name, email, password } = req.body;
  
      const data = await userService.createUser({ name, email, password });
  
      if (!data) return res.status(400).json({ message: 'Invalid fields' });
  
      return res.status(200).json(data);
    } catch (error) {
      console.log(error);
      return next(error);
    }
  };
  
  module.exports = { createUser };