// Importar variables de entorno
import dotenv from 'dotenv';
dotenv.config();

// Importar módulos
import jwt from 'jsonwebtoken';
import { getEmpleadoByCredentials } from '../queries_db/gets/read-db/read_db.mjs';

export class AuthController {
  static async authenticateToken(req, res, next) {
    const token = req.header('Authorization')?.split(' ')[1];

    if (!token) {
      return res.status(401).json({ error: 'Access token faltante' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res.status(403).json({ error: 'token invalido o expirado' });
      }

      req.user = user;
      next();
    });
  }

  static async generateAccessToken(req, res) {
    const { mail, password } = req.body;
    const secretKey = process.env.JWT_SECRET;

    if (!secretKey) {
      return res.status(500).json({ error: 'Secret key faltante' });
    }

    try {
      const usuarioDB = await getEmpleadoByCredentials(mail, password);
      
      if (!usuarioDB || usuarioDB.length === 0) { // Verifica si no se encontró el usuario
        return res.status(401).json({ error: 'Usuario y/o contraseña incorrectos' });
      }

      // Firma el token 
      const token = jwt.sign({ mail: usuarioDB[0].mail_empleado }, secretKey, { expiresIn: '10h' });

      return res.status(200).json({ accessToken: token, message: 'Logueo exitoso' });
    } catch (error) {
      return res.status(500).json({ error: 'Fallo al generar access token', details: error.message });
    }
  }
}

