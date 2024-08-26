import express from 'express';
import { authRouter } from './routes/AuthLogin.mjs';
import { empleadosRouter } from './routes/empleadosRouter.mjs';
import { insumoRouter } from './routes/insumoRouter.mjs';
import { materia_primaRouter } from './routes/materia_primaRouter.mjs';


export const mainRouters = express.Router();

mainRouters.use('/auth', authRouter);
mainRouters.use('/empleado',empleadosRouter);
mainRouters.use('/ver_insumo',insumoRouter);
mainRouters.use('/ver_materia_prima',materia_primaRouter);