import express from 'express';
import {GetController} from '../../queries_db/gets/getsHttp/gets.mjs'
import { PostController } from '../../queries_db/posts/postsHttp/posts.mjs';
import { DeleteController } from '../../queries_db/deletes/deleteHttp/delete.mjs';

export const clienteRouter = express.Router();

// GET ----------------------------

clienteRouter.get('/', GetController.getAllRecordsClientes);//http://localhost:3000/api/ver_clientes

//POST ----------------
clienteRouter.post('/crear_cliente',PostController.createCliente);//http://localhost:3000/api/clientes/crear_cliente

//DELETE -------------
clienteRouter.delete('/:id_cliente',DeleteController.deleteCliente);//http://localhost:3000/api/borrar_cliente/1
