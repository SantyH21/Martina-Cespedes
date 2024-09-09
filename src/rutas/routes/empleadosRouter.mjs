import express from 'express';
import {GetController} from '../../queries_db/gets/getsHttp/gets.mjs'
import { PostController } from '../../queries_db/posts/postsHttp/posts.mjs';
import { DeleteController } from '../../queries_db/deletes/deleteHttp/delete.mjs';
import { PutController } from '../../queries_db/Puts/putsHttp/put.mjs';

export const empleadosRouter = express.Router();


// GET ----------------------------
empleadosRouter.get('/ver_empleados', GetController.getAllRecordsEmpleados);//http://localhost:3000/api/empleado/ver_empleados
empleadosRouter.get('/buscar/:attribute/:value', GetController.getRecordsByAttributeEmpleado);//http://localhost:3000/api/empleado/buscar/id_empleado/1

//POST -----------------------
empleadosRouter.post('/crear_empleado',PostController.createEmpleado);//http://localhost:3000/api/empleado/crear_empleado

// DELETE ---------------
empleadosRouter.delete('/:id_empleado',DeleteController.deleteEmpleado);//http://localhost:3000/api/borrar_empleado/1

//PUT -------------
empleadosRouter.put('/:mail_empleado',PutController.putEmpleado);//