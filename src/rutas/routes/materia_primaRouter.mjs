import express from 'express';
import {GetController} from '../../queries_db/gets/getsHttp/gets.mjs'
import {PostController} from '../../queries_db/posts/postsHttp/posts.mjs'

export const materia_primaRouter = express.Router();

// GET ----------------------------

materia_primaRouter.get('/', GetController.getAllRecordsMateriaPrima);//http://localhost:3000/api/ver_materia_prima


// PUT ------------------
materia_primaRouter.put('/crear_materia_prima',PostController.createMateriaPrima);