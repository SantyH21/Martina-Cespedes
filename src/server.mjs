// Importar variables de entorno
import dotenv from 'dotenv';
dotenv.config();

// Importar módulos
import express from 'express';
import bodyParser from 'body-parser';
import auth from './auth.mjs';

// Crear instancia de express
const app = express();

const port = 3000;

// Middleware para parsear cuerpos de solicitudes con URL-encoded
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/login', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Login</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                margin: 0;
                background-color: #f0f0f0;
            }
            .login-container {
                background-color: #fff;
                padding: 20px;
                border-radius: 8px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            .login-container h2 {
                margin-bottom: 20px;
            }
            .login-container label {
                display: block;
                margin-bottom: 5px;
            }
            .login-container input {
                width: 100%;
                padding: 10px;
                margin-bottom: 15px;
                border: 1px solid #ccc;
                border-radius: 4px;
            }
            .login-container button {
                width: 100%;
                padding: 10px;
                background-color: #007bff;
                border: none;
                border-radius: 4px;
                color: white;
                font-size: 16px;
            }
            .login-container button:hover {
                background-color: #0056b3;
            }
        </style>
    </head>
    <body>
        <div class="login-container">
            <h2>Login</h2>
            <form action="/auth" method="POST">
                <label for="username">Usuario</label>
                <input type="text" id="username" name="username" required>
                
                <label for="password">Contraseña</label>
                <input type="password" id="password" name="password" required>
                
                <button type="submit">Login</button>
            </form>
        </div>
    </body>
    </html>
    `);
});

app.post('/auth', (req, res) => {
    const user = { username: req.body.username };
        //debug
    console.log(user);

    // Aquí la autenticación con la BD
    const accessToken = auth.generateAccessToken(user);

    res.header('auth', accessToken).json({
        message:"Usuario",
        token:accessToken
    })
    // res.send(`Usuario: ${username}, Contraseña: ${password}`);
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});

