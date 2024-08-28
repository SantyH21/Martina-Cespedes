import express from 'express';
import { authRouter } from './routes/AuthLogin.mjs';
import { empleadosRouter } from './routes/empleadosRouter.mjs';
import { insumoRouter } from './routes/insumoRouter.mjs';
import { materia_primaRouter } from './routes/materia_primaRouter.mjs';
import { stockRouter } from './routes/stockRouter.mjs';
import { clienteRouter } from './routes/clienteRouter.mjs';
import { ventasRouter } from './routes/ventasRouter.mjs';

export const mainRouters = express.Router();
//----gets routes-------
mainRouters.use('/auth', authRouter);
mainRouters.use('/empleado',empleadosRouter);
mainRouters.use('/ver_insumo',insumoRouter);
mainRouters.use('/ver_materia_prima',materia_primaRouter);
mainRouters.use('/ver_stock',stockRouter);
mainRouters.use('/ver_clientes',clienteRouter);
mainRouters.use('/movimientos',ventasRouter);

//-----puts routes----
mainRouters.use('/produccion',materia_primaRouter);