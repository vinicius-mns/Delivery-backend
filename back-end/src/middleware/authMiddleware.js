const authService = require('../services/authService');
const userServices = require('../services/userServices');

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) return res.status(401).json({ message: 'Token not found' });

    const { data } = await authService.validateToken(token);

    const user = await userServices.findByEmail(data.email);

    if (!user) return res.status(401).json({ message: 'Expired or invalid token' });

    req.user = data;

    next();
  } catch (error) {
    return next(error);
  }
};

module.exports = { authMiddleware };
