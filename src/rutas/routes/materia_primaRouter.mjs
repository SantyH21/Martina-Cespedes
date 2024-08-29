import express from 'express';
import {GetController} from '../../queries_db/gets/getsHttp/gets.mjs'
import {PostController} from '../../queries_db/posts/postsHttp/posts.mjs'
import { DeleteController } from '../../queries_db/deletes/deleteHttp/delete.mjs';

export const materia_primaRouter = express.Router();

// GET ----------------------------

materia_primaRouter.get('/', GetController.getAllRecordsMateriaPrima);//http://localhost:3000/api/ver_materia_prima


// POST ------------------
materia_primaRouter.post('/crear_materia_prima',PostController.createMateriaPrima);//http://localhost:3000/api/produccion/crear_materia_prima

// DELETE ----------
materia_primaRouter.delete('/:id_mat_prima',DeleteController.deleteMateriaPrima);//http://localhost:3000/api/borrar_materia_prima/1