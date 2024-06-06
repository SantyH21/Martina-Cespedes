const jwt = require('jsonwebtoken');
require('dotenv').config();

const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

function generateAccessToken(username) {
    const secretKey = process.env.SECRET_KEY; // Ensure this environment variable is set
    if (!secretKey) {
        throw new Error('Secret key is missing');
    }
    return jwt.sign({ username }, secretKey, { expiresIn: '1800s' });
}



module.exports = {authenticateToken,generateAccessToken};
