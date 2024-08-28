import express from 'express';
import {GetController} from '../../queries_db/gets/getsHttp/gets.mjs'
import { PostController } from '../../queries_db/posts/postsHttp/posts.mjs';

export const empleadosRouter = express.Router();


// GET ----------------------------
empleadosRouter.get('/ver_empleados', GetController.getAllRecordsEmpleados);//http://localhost:3000/api/empleado/ver_empleados
empleadosRouter.get('/buscar/:attribute/:value', GetController.getRecordsByAttributeEmpleado);//http://localhost:3000/api/empleado/buscar/id_empleado/1

//POST -----------------------
empleadosRouter.post('/crear_empleado',PostController.createEmpleado);
