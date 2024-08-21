// Importar variables de entorno
import dotenv from 'dotenv';
dotenv.config();

// Importar módulos
import jwt from 'jsonwebtoken';

class AuthController {
  authenticateToken(req, res, next) {
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) return res.sendStatus(401);

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) return res.sendStatus(403);
      req.user = user;
      next();
    });
  }

  generateAccessToken(username) {
    const secretKey = process.env.JWT_SECRET;

    if (!secretKey) {
      throw new Error('Secret key is missing');
    }
    return jwt.sign({ username }, secretKey, { expiresIn: '10h' });
  }
}
export default new AuthController();
