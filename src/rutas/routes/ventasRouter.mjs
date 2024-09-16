import express from 'express';
import {GetController} from '../../queries_db/gets/getsHttp/gets.mjs'
import { DeleteController } from '../../queries_db/deletes/deleteHttp/delete.mjs';
import { PostController } from '../../queries_db/posts/postsHttp/posts.mjs';

export const ventasRouter = express.Router();

// GET ----------------------------

ventasRouter.get('/historial_ventas', GetController.getAllRecordsVentas);//http://localhost:3000/api/movimientos/historial_ventas


// POST ----------------
ventasRouter.post('/crear_venta',PostController.createVenta);//http://localhost:3000/api/ventas/crear_venta

// DELETE ------------
ventasRouter.delete('/:id_ventas',DeleteController.deleteVenta);//http://localhost:3000/api/borrar_venta/3