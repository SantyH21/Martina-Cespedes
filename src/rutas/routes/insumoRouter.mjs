import express from 'express';
import {GetController} from '../../queries_db/gets/getsHttp/gets.mjs'

export const insumoRouter = express.Router();

// GET ----------------------------
insumoRouter.get('/', GetController.getAllRecordsInsumos);//http://localhost:3000/api/ver_insumo