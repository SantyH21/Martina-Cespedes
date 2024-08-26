import express from 'express';
import { authRouter } from './routes/AuthLogin.mjs';
import { empleadosRouter } from './routes/empleadosRouter.mjs';

export const mainRouters = express.Router();

mainRouters.use('/auth', authRouter);
mainRouters.use('/empleados',empleadosRouter);