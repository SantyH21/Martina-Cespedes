import express from 'express';
import {GetController} from '../../queries_db/gets/getsHttp/gets.mjs'



export const empleadosRouter = express.Router();

// GET ----------------------------
empleadosRouter.get('/ver_empleados', GetController.getAllRecords);
empleadosRouter.get('ver_empleados/:id', GetController.getRecordsByAttribute);