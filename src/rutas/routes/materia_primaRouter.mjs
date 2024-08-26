import express from 'express';
import {GetController} from '../../queries_db/gets/getsHttp/gets.mjs'

export const materia_primaRouter = express.Router();

// GET ----------------------------

materia_primaRouter.get('/', GetController.getAllRecordsMateriaPrima);
