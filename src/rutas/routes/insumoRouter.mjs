import express from 'express';
import {GetController} from '../../queries_db/gets/getsHttp/gets.mjs'
import {PostController} from '../../queries_db/posts/postsHttp/posts.mjs'
import { DeleteController } from '../../queries_db/deletes/deleteHttp/delete.mjs';

export const insumoRouter = express.Router();

// GET ----------------------------
insumoRouter.get('/', GetController.getAllRecordsInsumos);//http://localhost:3000/api/ver_insumo

// POST ------------------
insumoRouter.post('/crear_insumo',PostController.createInsumo);//http://localhost:3000/api/produccion/crear_insumo

// DELETE -----
insumoRouter.delete('/:id_insumo',DeleteController.deleteInsumo);//http://localhost:3000/api/borrar_insumo/1