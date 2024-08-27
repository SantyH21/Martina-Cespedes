import express from 'express';
import {GetController} from '../../queries_db/gets/getsHttp/gets.mjs'

export const ventasRouter = express.Router();

// GET ----------------------------

ventasRouter.get('/historial_ventas', GetController.getAllRecordsVentas);//http://localhost:3000/api/movimientos/historial_ventas