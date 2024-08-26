import express from 'express';
import {GetController} from '../../queries_db/gets/getsHttp/gets.mjs'

export const clienteRouter = express.Router();

// GET ----------------------------

clienteRouter.get('/', GetController.getAllRecordsClientes);//http://localhost:3000/api/ver_clientes
