import express from 'express';
import {GetController} from '../../queries_db/gets/getsHttp/gets.mjs'
import { PutController } from '../../queries_db/Puts/putsHttp/put.mjs';

export const stockRouter = express.Router();

// GET ----------------------------

stockRouter.get('/', GetController.getAllRecordsStock);//http://localhost:3000/api/ver_stock

// PUT-------------------

stockRouter.put('/',PutController.putStock);//http://localhost:3000/api/actualizar_stock